
package com.example.banco.demo.controles;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.banco.demo.entidades.Usuario;
import com.example.banco.demo.modelo.UsuarioAtualizador;
import com.example.banco.demo.modelo.UsuarioConversor;
import com.example.banco.demo.modelo.UsuarioModelo;
import com.example.banco.demo.modelo.UsuarioSelecionador;
import com.example.banco.demo.repositorios.UsuarioRepositorio;

@CrossOrigin
@RestController
public class UsuarioControle {
	@Autowired
	private UsuarioRepositorio repositorio;
	@Autowired
	private UsuarioSelecionador selecionador;
	@Autowired
	private PasswordEncoder encoder;
	@Autowired
	private UsuarioConversor conversor;
	
	@GetMapping("/usuario/{id}")
	public ResponseEntity<UsuarioModelo> obterUsuario(@PathVariable String id){
		List<Usuario> usuarios = repositorio.findAll();
		Usuario usuario = selecionador.selecionar(usuarios, id);
		UsuarioModelo usuarioModelo = new UsuarioModelo();
		conversor.converter(usuario, usuarioModelo);
		if (usuarioModelo == null) {
			ResponseEntity<UsuarioModelo> resposta = new ResponseEntity<>(HttpStatus.NOT_FOUND);
			return resposta;
		} else {
			ResponseEntity<UsuarioModelo> resposta = new ResponseEntity<UsuarioModelo>(usuarioModelo, HttpStatus.FOUND);
			return resposta;
		}
		
	}
	
	@GetMapping("/usuarios")
	public ResponseEntity<List<UsuarioModelo>> obterUsuarios(){
		List<Usuario> usuarios = repositorio.findAll();
		List<UsuarioModelo> usuariosModelo = new ArrayList<UsuarioModelo>();
		for (Usuario usuario: usuarios) {
			UsuarioModelo usuarioModelo = new UsuarioModelo();
			conversor.converter(usuario, usuarioModelo);
			usuariosModelo.add(usuarioModelo);
		}
		if (usuarios.isEmpty()) {
			ResponseEntity<List<UsuarioModelo>> resposta = new ResponseEntity<>(usuariosModelo, HttpStatus.NOT_FOUND);
			return resposta;
		} else {
			ResponseEntity<List<UsuarioModelo>> resposta = new ResponseEntity<>(usuariosModelo, HttpStatus.OK);
			return resposta;
		}
	}
	
	@PostMapping("/usuario/cadastrar")
	public ResponseEntity<?> cadastrarUsuario(@RequestBody Usuario usuario){
		List<Usuario> usuarios = repositorio.findAll();
		Usuario user = selecionador.selecionar(usuarios, usuario.getEmail());
		HttpStatus status = HttpStatus.CONFLICT;
		if (usuario.getId() == null & user == null) {
			usuario.setSenha(encoder.encode(usuario.getSenha()));
			repositorio.save(usuario);
			status = HttpStatus.CREATED;
		}
		return new ResponseEntity<>(status);
	}
	
	@PostMapping("/login")
	public ResponseEntity<Boolean> login(@RequestBody Usuario user){
		List<Usuario> usuarios = repositorio.findAll();
		Usuario usuario = selecionador.selecionar(usuarios, user.getEmail());
		if (usuario == null) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(false);
		}
		boolean valid = false;
		valid = encoder.matches(user.getSenha(), usuario.getSenha());
		HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.FORBIDDEN;
		return ResponseEntity.status(status).body(valid);
	}
	
	@PutMapping("/redefinirSenha")
	public ResponseEntity<?> redefinirSenha(@RequestBody Usuario atualizacao){
		HttpStatus status = HttpStatus.CONFLICT;
		List<Usuario> usuarios = repositorio.findAll();
		Usuario selecionado = selecionador.selecionar(usuarios, atualizacao.getId());
		if (selecionado != null) {
			UsuarioAtualizador atualizador = new UsuarioAtualizador();
			atualizador.atualizarDados(selecionado, atualizacao);
			repositorio.save(selecionado);
			status = HttpStatus.OK;
		} else {
			status = HttpStatus.BAD_REQUEST;
		}
		return new ResponseEntity<>(status);
	}
	
	@DeleteMapping("/usuario/deletar")
	public ResponseEntity<?> deletarUsuario(@RequestBody Usuario delecao) {
		HttpStatus status = HttpStatus.BAD_REQUEST;
		List<Usuario> usuarios = repositorio.findAll();
		Usuario selecionado = null;
		for (Usuario usuario : usuarios) {
			if (usuario.getId().equals(delecao.getId())) {
				selecionado = usuario;
			}
		}
		if (selecionado != null) {
			repositorio.delete(selecionado);
			status = HttpStatus.OK;
		}
		return new ResponseEntity<>(status);
	}
}

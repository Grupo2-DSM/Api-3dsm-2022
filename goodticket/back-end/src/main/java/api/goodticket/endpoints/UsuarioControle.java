
package api.goodticket.endpoints;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import api.goodticket.dto.UsuarioDTO;
import api.goodticket.editors.UsuarioAtualizador;
import api.goodticket.entities.Usuario;
import api.goodticket.models.UsuarioConversor;
import api.goodticket.models.UsuarioModelo;
import api.goodticket.selectors.UsuarioSelecionador;
import api.goodticket.repositories.UsuarioRepositorio;

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
	
	@PreAuthorize("hasAnyRole('ADMIN')")
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
	
	@PreAuthorize("hasAnyRole('ADMIN')")
	@PostMapping("/usuario/cadastro")
	public ResponseEntity<Usuario> cadastroUsuario(@RequestBody UsuarioDTO usuarioDto){
		List<Usuario> usuarios = repositorio.findAll();
		Usuario usuario = selecionador.selecionar(usuarios, usuarioDto.getEmail());
		HttpStatus status = HttpStatus.CONFLICT;
		if (usuario == null) {
			if (usuarioDto.getEmail() != null && usuarioDto.getSenha() != null && usuarioDto.getUsuario().getNome() != null
					&& usuarioDto.getUsuario().getSetor() != null && usuarioDto.getCargos() != null) {
				Usuario user = usuarioDto.obter();
				repositorio.save(user);
				status = HttpStatus.CREATED;
			} else {
				status = HttpStatus.BAD_REQUEST;
			}
		}
		return new ResponseEntity<>(status);
	}
	
	@PutMapping("/redefinirSenha")
	public ResponseEntity<?> redefinirSenha(@RequestBody Usuario atualizacao){
		HttpStatus status = HttpStatus.CONFLICT;
		List<Usuario> usuarios = repositorio.findAll();
		Usuario selecionado = selecionador.selecionar(usuarios, atualizacao.getCredencial().getEmail());
		if (selecionado != null) {
			UsuarioAtualizador atualizador = new UsuarioAtualizador();
			atualizador.atualizarDados(selecionado, atualizacao);
			selecionado.getCredencial().setSenha(encoder.encode(selecionado.getCredencial().getSenha()));
			repositorio.save(selecionado);
			status = HttpStatus.OK;
		} else {
			status = HttpStatus.BAD_REQUEST;
		}
		return new ResponseEntity<>(status);
	}
	
	@PreAuthorize("hasAnyRole('ADMIN')")
	@DeleteMapping("/usuario/deletar")
	public ResponseEntity<?> deletarUsuario(@RequestBody Usuario delecao) {
		HttpStatus status = HttpStatus.BAD_REQUEST;
		List<Usuario> usuarios = repositorio.findAll();
		Usuario selecionado = null;
		for (Usuario usuario : usuarios) {
			if (usuario.getCredencial().getEmail().equals(delecao.getCredencial().getEmail())) {
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

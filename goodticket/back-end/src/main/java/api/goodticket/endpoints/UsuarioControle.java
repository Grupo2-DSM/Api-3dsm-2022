
package api.goodticket.endpoints;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
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
import api.goodticket.entities.Credencial;
import api.goodticket.entities.Usuario;
import api.goodticket.jwt.JWTGenerator;
import api.goodticket.models.LoginModel;
import api.goodticket.models.NewPasswordModel;
import api.goodticket.models.UsuarioConversor;
import api.goodticket.models.UsuarioModelo;
import api.goodticket.selectors.UsuarioSelecionador;
import io.jsonwebtoken.Jwts;
import api.goodticket.repositories.UsuarioRepositorio;
import api.goodticket.security.TokenDTO;

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
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JWTGenerator jwtTokenGenerator;
	
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
	public ResponseEntity<?> redefinirSenha(@RequestBody NewPasswordModel atualizacao){
		HttpStatus status = HttpStatus.CONFLICT;
		List<Usuario> usuarios = repositorio.findAll();
		Usuario selecionado = selecionador.selecionar(usuarios, atualizacao.getEmail());
		if (selecionado != null && atualizacao.getSenha().equals(atualizacao.getConfirmarSenha())) {
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
	
	@PostMapping("/usuario/autenticar")
	public ResponseEntity<TokenDTO> autenticar(@RequestBody LoginModel login){
		List<Usuario> usuarios = repositorio.findAll();
		UsernamePasswordAuthenticationToken payloadLogin = login.converter();
		try {
			Authentication authentication = authenticationManager.authenticate(payloadLogin);
			
			Usuario usuario = selecionador.selecionar(usuarios, authentication.getName());
			
			String token = jwtTokenGenerator.generateToken(authentication.getName());
			
			return ResponseEntity.ok(new TokenDTO(token, "Bearer ", usuario));
		} catch(AuthenticationException e) {
			return new ResponseEntity<TokenDTO>(HttpStatus.UNAUTHORIZED);
		}
	}
}

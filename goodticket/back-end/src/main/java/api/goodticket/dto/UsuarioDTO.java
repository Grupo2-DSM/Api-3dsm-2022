package api.goodticket.dto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import api.goodticket.entities.Credencial;
import api.goodticket.entities.Usuario;
import api.goodticket.models.Cargo;
import lombok.Data;

@Data
public class UsuarioDTO implements DataTransferObject<Usuario>{
	private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	
	private String nome;
	private String email;
	private String senha;
	private String setor;
	private Cargo cargo;
	
	@Override
	public Usuario obter() {
		Usuario usuario = new Usuario();
		
		Credencial credencial = new Credencial();
		credencial.setEmail(email);
		credencial.setSenha(encoder.encode(senha));
		usuario.setCredencial(credencial);
		
		List<Cargo> cargos = new ArrayList<>();
		cargos.add(cargo);
		usuario.setCargos(cargos);
		
		usuario.setNome(nome);
		usuario.setSetor(setor);
		return usuario;
	}
}

package api.goodticket.dto;

import java.util.List;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import api.goodticket.entities.Credencial;
import api.goodticket.entities.Usuario;
import api.goodticket.models.Cargo;
import lombok.Data;

@Data
public class UsuarioDTO implements DataTransferObject<Usuario>{
	private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	
	private Usuario usuario;
	private String email;
	private String senha;
	private List<Cargo> cargos;
	
	@Override
	public Usuario obter() {
		Credencial credencial = new Credencial();
		credencial.setEmail(email);
		credencial.setSenha(encoder.encode(senha));
		usuario.setCredencial(credencial);
		usuario.setCargos(cargos);
		return this.usuario;
	}
}

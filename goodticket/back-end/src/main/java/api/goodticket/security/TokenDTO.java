package api.goodticket.security;

import api.goodticket.dto.UsuarioLoginDTO;
import api.goodticket.entities.Usuario;
import lombok.Data;

@Data
public class TokenDTO {
	
	private String token;
	private String prefixo;
	private UsuarioLoginDTO usuario;
	
	
	public TokenDTO(String token, String prefixo, Usuario usuario) {
		this.token = token;
		this.prefixo = prefixo;
		
		this.usuario = UsuarioLoginDTO.create(usuario);
	}
}

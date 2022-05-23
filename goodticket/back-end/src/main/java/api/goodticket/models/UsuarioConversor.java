package api.goodticket.models;

import org.springframework.stereotype.Component;

import api.goodticket.entities.Usuario;

@Component
public class UsuarioConversor {
	
	public UsuarioModelo converter(Usuario usuario, UsuarioModelo usuarioModelo) {
		usuarioModelo.setNome(usuario.getNome());
		usuarioModelo.setSetor(usuario.getSetor());
		usuarioModelo.setCargos(usuario.getCargos());
		return usuarioModelo;
	}
}

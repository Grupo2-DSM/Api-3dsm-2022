package api.goodticket.models;

import api.goodticket.entities.Usuario;

public class UsuarioVerificadorNulo {
	
	public boolean verificar(Usuario usuario) {
		boolean nulo = true;
		if (!(usuario == null)) {
			if (!usuario.getId().isBlank()) {
				nulo = false;
			}
		}
		return nulo;
	}
}

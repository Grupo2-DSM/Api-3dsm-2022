package api.goodticket.models;

import api.goodticket.entities.Usuario;

public class UsuarioVerificadorNulo {
	
	public boolean verificar(UsuarioModelo usuarioModelo) {
		boolean nulo = true;
		if (!(usuarioModelo == null)) {
			if (!usuarioModelo.getEmail().isBlank()) {
				nulo = false;
			}
		}
		return nulo;
	}
}

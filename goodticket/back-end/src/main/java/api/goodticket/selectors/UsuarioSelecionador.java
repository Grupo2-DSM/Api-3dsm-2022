package api.goodticket.selectors;

import java.util.List;

import org.springframework.stereotype.Component;

import api.goodticket.entities.Usuario;

@Component
public class UsuarioSelecionador {
	public Usuario selecionar(List<Usuario> usuarios, String email) {
		Usuario selecionado = null;
		for (Usuario usuario : usuarios) {
			if (usuario.getCredencial().getEmail().equals(email)) {
				selecionado = usuario;
			}
		}
		return selecionado;
	}
}

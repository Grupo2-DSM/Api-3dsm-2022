package api.goodticket.models;

import java.util.List;

import org.springframework.stereotype.Component;

import api.goodticket.entities.Usuario;

@Component
public class UsuarioConversor {
	
	public UsuarioModelo converter(Usuario usuario, UsuarioModelo usuarioModelo) {
		usuarioModelo.setNome(usuario.getNome());
		usuarioModelo.setSetor(usuario.getSetor());
		List<Cargo> cargos = usuario.getCargos();
		Cargo cargoSelecionado = null;
		for (Cargo cargo : cargos) {
			cargoSelecionado = cargo;
		}
		String cargo = cargoSelecionado.toString();
		cargo = cargo.split("_")[1];
		usuarioModelo.setCargo(cargo);
		usuarioModelo.setEmail(usuario.getCredencial().getEmail());
		return usuarioModelo;
	}
}

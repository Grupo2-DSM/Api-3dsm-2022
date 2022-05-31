package api.goodticket.dto;

import java.util.List;

import api.goodticket.entities.Credencial;
import api.goodticket.entities.Usuario;
import api.goodticket.models.Cargo;
import lombok.Data;

@Data
public class UsuarioLoginDTO {
	private Credencial credencial = new Credencial();
	private String nome;
	private String setor;
	private List<Cargo> cargos;
	
	public UsuarioLoginDTO(Usuario usuario) {
		this.nome = usuario.getNome();
		this.setor = usuario.getSetor();
		this.cargos = usuario.getCargos();
		this.credencial.setEmail(usuario.getCredencial().getEmail());
	}
	
	public static UsuarioLoginDTO create(Usuario usuario) {
		return new UsuarioLoginDTO(usuario);
	}
}

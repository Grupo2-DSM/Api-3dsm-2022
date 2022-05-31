package api.goodticket.dto;

import api.goodticket.entities.Chamado;
import api.goodticket.entities.Comentario;
import api.goodticket.entities.Usuario;
import api.goodticket.models.UsuarioConversor;
import api.goodticket.models.UsuarioModelo;
import lombok.Data;

@Data
public class SolucaoDTO {
	private String chamadoId;
	private String email;
	private String body;
	
	public Chamado obter(Chamado chamado, Usuario usuario) {
		
		UsuarioConversor conversor = new UsuarioConversor();
		UsuarioModelo usuarioModelo = new UsuarioModelo();
		conversor.converter(usuario, usuarioModelo);
		
		Comentario solucao = new Comentario();
		solucao.setBody(body);
		solucao.setUsuario(usuarioModelo);
		
		chamado.setSolucao(solucao);
		return chamado;
	}
}

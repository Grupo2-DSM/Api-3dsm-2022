package api.goodticket.dto;

import java.util.ArrayList;
import java.util.List;

import api.goodticket.entities.Chamado;
import api.goodticket.entities.Comentario;
import api.goodticket.entities.Usuario;
import api.goodticket.models.UsuarioConversor;
import api.goodticket.models.UsuarioModelo;
import lombok.Data;

@Data
public class ComentarioDTO {
	private String chamadoId;
	private String email;
	private String body;
	private String datahora;
	
	public Chamado obter(Chamado chamado, Usuario usuario) {
		
		UsuarioConversor conversor = new UsuarioConversor();
		UsuarioModelo usuarioModelo = new UsuarioModelo();
		conversor.converter(usuario, usuarioModelo);
		
		Comentario comentario = new Comentario();
		comentario.setBody(body);
		comentario.setUsuario(usuarioModelo);
		comentario.setDatahora(datahora);
		List<Comentario> comentarios = new ArrayList<>();
		
		if (chamado.getComentarios() != null) {
			comentarios = chamado.getComentarios();
		}
		
		comentarios.add(comentario);
		chamado.setComentarios(comentarios);
		
		return chamado;
	}
}

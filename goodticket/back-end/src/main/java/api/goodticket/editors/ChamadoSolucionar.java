package api.goodticket.editors;

import api.goodticket.models.StringVerificadorNulo;
import api.goodticket.models.UsuarioVerificadorNulo;
import api.goodticket.entities.Chamado;
import api.goodticket.entities.Comentario;

public class ChamadoSolucionar {
	
	private StringVerificadorNulo verificador = new StringVerificadorNulo();
	private UsuarioVerificadorNulo verificadorUsuario = new UsuarioVerificadorNulo();
	
	public void inserirComentario(Chamado chamado, Chamado comentarioChamado) {
		Comentario comentarioChamadoSolucao = comentarioChamado.getSolucao();
		Comentario chamadoSolucao = new Comentario();
		if(!verificador.verificar(comentarioChamadoSolucao.getBody())) {
			chamadoSolucao.setBody(comentarioChamadoSolucao.getBody());
		}
		if (!verificadorUsuario.verificar(comentarioChamadoSolucao.getUsuario())) {
			
			chamadoSolucao.setUsuario(comentarioChamadoSolucao.getUsuario());
		}
		chamado.setSolucao(chamadoSolucao);
	}
	
}

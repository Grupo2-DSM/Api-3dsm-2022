package api.goodticket.editors;

import api.goodticket.entities.Usuario;
import api.goodticket.models.StringVerificadorNulo;


public class UsuarioAtualizador {
	private StringVerificadorNulo verificador = new StringVerificadorNulo();
	
	public void atualizarDados(Usuario usuario, Usuario atualizacao) {
		if(!verificador.verificar(atualizacao.getCredencial().getSenha())) {
			usuario.getCredencial().setSenha(atualizacao.getCredencial().getSenha());
		}
	}
}

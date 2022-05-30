package api.goodticket.editors;

import api.goodticket.entities.Usuario;
import api.goodticket.models.NewPasswordModel;
import api.goodticket.models.StringVerificadorNulo;


public class UsuarioAtualizador {
	private StringVerificadorNulo verificador = new StringVerificadorNulo();
	
	public void atualizarDados(Usuario usuario, NewPasswordModel atualizacao) {
		if(!verificador.verificar(atualizacao.getSenha())) {
			usuario.getCredencial().setSenha(atualizacao.getSenha());
		}
	}
}

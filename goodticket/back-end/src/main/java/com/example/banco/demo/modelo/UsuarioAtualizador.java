package com.example.banco.demo.modelo;

import com.example.banco.demo.entidades.Usuario;

public class UsuarioAtualizador {
	
	private StringVerificadorNulo verificador = new StringVerificadorNulo();
	
	public void atualizarDados(Usuario usuario, Usuario atualizacao) {
		if(!verificador.verificar(atualizacao.getSenha())) {
			usuario.setSenha(atualizacao.getSenha());
		}
	}
}

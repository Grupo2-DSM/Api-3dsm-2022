package com.example.banco.demo.modelo;

import com.example.banco.demo.entidades.Chamado;

public class ChamadoAtualizador {
	
	private StringVerificadorNulo verificador = new StringVerificadorNulo();
	private NumberVerificadorNulo verificadorNumber = new NumberVerificadorNulo();
	
	public void atualizarDados(Chamado chamado, Chamado atualizacao) {
		if(!verificador.verificar(atualizacao.getTitulo())) {
			chamado.setTitulo(atualizacao.getTitulo());
		}
		if(!verificador.verificar(atualizacao.getDescricao())) {
			chamado.setDescricao(atualizacao.getDescricao());
		}
		if(!verificador.verificar(atualizacao.getTipo())) {
			chamado.setTipo(atualizacao.getTipo());
		}
		if(!verificador.verificar(atualizacao.getEquipamento())) {
			chamado.setEquipamento(atualizacao.getEquipamento());
		}
		if(!verificador.verificar(atualizacao.getDescri_equipamento())) {
			chamado.setDescri_equipamento(atualizacao.getDescri_equipamento());
		}
		if(!verificadorNumber.verificar(atualizacao.getNum_maquina())) {
			chamado.setNum_maquina(atualizacao.getNum_maquina());
		}
		if(!verificador.verificar(atualizacao.getLocal())) {
			chamado.setLocal(atualizacao.getLocal());
		}
		if(!verificadorNumber.verificar(atualizacao.getSala())) {
			chamado.setSala(atualizacao.getSala());
		}
		if(!verificador.verificar(atualizacao.getResolucao())) {
			chamado.setResolucao(atualizacao.getResolucao());
		}
		if(!verificador.verificar(atualizacao.getStatus())) {
			chamado.setStatus(atualizacao.getStatus());
		}
	}
	
}

package com.example.banco.demo.modelo;

public class NumberVerificadorNulo {
	public boolean verificar(Number dado) {
		boolean nulo = true;
		if (!(dado == null)) {
			if (!dado.toString().isBlank()) {
				nulo = false;
			}
		}
		return nulo;
	}
}

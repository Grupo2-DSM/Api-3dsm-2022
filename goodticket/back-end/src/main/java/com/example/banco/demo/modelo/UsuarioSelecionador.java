package com.example.banco.demo.modelo;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.banco.demo.entidades.Usuario;

@Component
public class UsuarioSelecionador {
	public Usuario selecionar(List<Usuario> usuarios, String email) {
		Usuario selecionado = null;
		for (Usuario usuario : usuarios) {
			if (usuario.getEmail().equals(email)) {
				selecionado = usuario;
			}
		}
		return selecionado;
	}
}

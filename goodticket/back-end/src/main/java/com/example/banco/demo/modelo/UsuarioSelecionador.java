package com.example.banco.demo.modelo;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.banco.demo.entidades.Usuario;

@Component
public class UsuarioSelecionador {
	public Usuario selecionar(List<Usuario> usuarios, String id) {
		Usuario selecionado = null;
		for (Usuario usuario : usuarios) {
			if (usuario.getId().equals(id)) {
				selecionado = usuario;
			}
		}
		return selecionado;
	}
}

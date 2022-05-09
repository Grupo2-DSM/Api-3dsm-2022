package com.example.banco.demo.modelo;

import org.springframework.stereotype.Component;

import com.example.banco.demo.entidades.Usuario;

@Component
public class UsuarioConversor {
	
	public UsuarioModelo converter(Usuario usuario, UsuarioModelo usuarioModelo) {
		usuarioModelo.setNome(usuario.getNome());
		usuarioModelo.setSetor(usuario.getSetor());
		usuarioModelo.setCargo(usuario.getCargo());
		usuarioModelo.setEmail(usuario.getEmail());
		return usuarioModelo;
	}
}

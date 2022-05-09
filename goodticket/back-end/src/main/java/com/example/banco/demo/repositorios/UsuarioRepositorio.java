package com.example.banco.demo.repositorios;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.banco.demo.entidades.Usuario;

public interface UsuarioRepositorio extends MongoRepository<Usuario, String>{
	
}

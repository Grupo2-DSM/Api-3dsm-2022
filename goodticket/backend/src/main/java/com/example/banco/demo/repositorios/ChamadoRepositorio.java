package com.example.banco.demo.repositorios;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.banco.demo.entidades.Chamado;

public interface ChamadoRepositorio extends MongoRepository<Chamado, String>{
}

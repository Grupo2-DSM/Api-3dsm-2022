package api.goodticket.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import api.goodticket.entities.Usuario;

public interface UsuarioRepositorio extends MongoRepository<Usuario, String>{
	
}

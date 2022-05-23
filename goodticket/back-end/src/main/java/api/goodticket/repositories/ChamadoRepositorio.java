package api.goodticket.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import api.goodticket.entities.Chamado;

public interface ChamadoRepositorio extends MongoRepository<Chamado, String>{
}

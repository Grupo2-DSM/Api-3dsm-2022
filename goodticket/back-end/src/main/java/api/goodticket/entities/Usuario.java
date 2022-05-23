package api.goodticket.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import api.goodticket.models.Cargo;
import lombok.Data;

@Document("usuarios")
@Data
public class Usuario {
	@Id
	private String id;
	
	private String nome;
	
	private String setor;
	
	private String cargo;
	
	private Credencial credencial;
	
	private List<Cargo> cargos = new ArrayList<>();
	
}
package com.example.banco.demo.entidades;

import javax.persistence.Column;
import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document("Usuario")
@Data
public class Usuario {
	@Id
	private String id;
	
	private String nome;
	
	private String setor;
	
	private String cargo;
	
	@Column(unique = true)
	private String email;

	private String senha;
	
}
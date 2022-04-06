package com.example.banco.demo.entidades;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document("Usuario")
@Data
public class Cliente {
	@Id
	private String id;
	
	private String nome;
	
	private String email;
	
	private String departamento;
	
	private String cargo;
}
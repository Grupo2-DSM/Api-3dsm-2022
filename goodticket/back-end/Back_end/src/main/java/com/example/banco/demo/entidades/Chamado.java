package com.example.banco.demo.entidades;

import java.util.Date;
import java.util.List;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document("chamados")
@Data
public class Chamado {
	
	@Id
	private String id;
	
	private String titulo; 
	
	private String descricao;
	
	private String tipo;
	
	private String equipamento;
	
	private String descri_equipamento;
	
	private Number num_maquina; //atualizar
	
	private String local; //atualizar
	
	private Number sala; //atualizar
	
	private Date datahora;
	
	private String resolucao; //atualizar
	
	private String resolvido; //atualizar
	
	private String dificuldade;
	
	private String prioridade;
	
	private Cliente relator;

}

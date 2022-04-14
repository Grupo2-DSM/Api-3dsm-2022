package com.example.banco.demo.entidades;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document("chamados")
@Data
public class Chamado {
	
	@Id
	private String id; //OK
	
	private String titulo; //OK
	
	private String descricao; //OK
	
	private String tipo; //OK
	
	private String equipamento; //OK
	
	private String descri_equipamento;//OK
	
	private Number num_maquina;
	
	private String local; //OK
	
	private Number sala;
	
	private Date datahora;
	
	private String resolucao;
	
	private String status;
	
	private String dificuldade;
	
	private String prioridade;
	
	private Cliente relator;

}

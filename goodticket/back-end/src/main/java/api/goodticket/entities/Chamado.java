package api.goodticket.entities;
import java.util.List;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import api.goodticket.models.UsuarioModelo;
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
	
	private Number num_maquina;
	
	private String local;
	
	private Number sala;
	
	private String datahora;
	
	private String status;
	
	private String dificuldade;
	
	private String prioridade;
	
	private UsuarioModelo relator;
	
	private UsuarioModelo suporte;
	
	private List<Comentario> comentarios;
	
	private Comentario solucao;
	
	private String datahorafechamento;
}

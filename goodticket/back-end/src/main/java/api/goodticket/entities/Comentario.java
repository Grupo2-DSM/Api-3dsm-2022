package api.goodticket.entities;

import java.util.Date;

import api.goodticket.models.UsuarioModelo;
import lombok.Data;

@Data
public class Comentario {
	private String body;
	
	private UsuarioModelo usuario;
	
	private String datahora;
}

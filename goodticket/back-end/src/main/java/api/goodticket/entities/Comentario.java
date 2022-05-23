package api.goodticket.entities;

import java.util.Date;

import lombok.Data;

@Data
public class Comentario {
	private String body;
	
	private Usuario usuario;
	
	private Date date;
}

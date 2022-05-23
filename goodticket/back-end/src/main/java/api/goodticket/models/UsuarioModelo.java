package api.goodticket.models;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class UsuarioModelo {
	
	private String nome;
	
	private String setor;
	
	private List<Cargo> cargos = new ArrayList<>();
}

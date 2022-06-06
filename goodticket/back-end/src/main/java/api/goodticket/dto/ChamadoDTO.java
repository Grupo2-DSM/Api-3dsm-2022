package api.goodticket.dto;

import api.goodticket.entities.Chamado;
import lombok.Data;

@Data
public class ChamadoDTO implements DataTransferObject<Chamado>{
	
	private String titulo;
	private String descricao;
	private String tipo;
	private String equipamento; 
	private String descri_equipamento;
	private Number num_maquina;
	private String local;
	private Number sala;
	private String prioridade;
	private String email;
	
	@Override
	public Chamado obter() {
		Chamado chamado = new Chamado();
		
		chamado.setTitulo(titulo);
		chamado.setDescricao(descricao);
		chamado.setTipo(tipo);
		chamado.setEquipamento(equipamento);
		chamado.setDescri_equipamento(descri_equipamento);
		chamado.setNum_maquina(num_maquina);
		chamado.setLocal(local);
		chamado.setSala(sala);
		chamado.setPrioridade(prioridade);
		
		return chamado;
	}
}

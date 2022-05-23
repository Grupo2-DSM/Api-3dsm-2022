package api.goodticket.selectors;

import java.util.List;

import org.springframework.stereotype.Component;

import api.goodticket.entities.Chamado;

@Component
public class ChamadoSelecionador {
	public Chamado selecionar(List<Chamado> chamados, String id) {
		Chamado selecionado = null;
		for (Chamado chamado : chamados) {
			if (chamado.getId().equals(id)) {
				selecionado = chamado;
			}
		}
		return selecionado;
	}
}
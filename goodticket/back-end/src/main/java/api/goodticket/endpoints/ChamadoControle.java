package api.goodticket.endpoints;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import api.goodticket.editors.ChamadoAtualizador;
import api.goodticket.editors.ChamadoSolucionar;
import api.goodticket.entities.Chamado;
import api.goodticket.selectors.ChamadoSelecionador;
import api.goodticket.repositories.ChamadoRepositorio;

@CrossOrigin
@RestController
public class ChamadoControle {
	
	@Autowired
	private ChamadoRepositorio repositorio;
	@Autowired
	private ChamadoSelecionador selecionador;
	
	@GetMapping("/chamados")
	public ResponseEntity<List<Chamado>> obterChamados() {
		List<Chamado> chamados = repositorio.findAll();
		if (chamados.isEmpty()) {
			ResponseEntity<List<Chamado>> resposta = new ResponseEntity<>(chamados, HttpStatus.NOT_FOUND);
			return resposta;
		} else {
			ResponseEntity<List<Chamado>> resposta = new ResponseEntity<>(chamados, HttpStatus.OK);
			return resposta;
		}
	}
	
	@GetMapping("/chamados/fechados")
	public ResponseEntity<List<Chamado>> obterChamadosFechados() {
		List<Chamado> chamados = repositorio.findAll();
		List<Chamado> chamadosFechados = new ArrayList<>();
		for (Chamado chamado : chamados) {
			if (chamado.getStatus().equals("Fechado")) {
				chamadosFechados.add(chamado);
			}
		}
		if (chamadosFechados.isEmpty()) {
			ResponseEntity<List<Chamado>> resposta = new ResponseEntity<>(HttpStatus.NOT_FOUND);
			return resposta;
		} else {
			ResponseEntity<List<Chamado>> resposta = new ResponseEntity<>(chamadosFechados, HttpStatus.OK);
			return resposta;
		}
	}
	
	@GetMapping("/chamado/{id}")
	public ResponseEntity<Chamado> obterChamado(@PathVariable String id) {
		List<Chamado> chamados = repositorio.findAll();
		Chamado chamado = selecionador.selecionar(chamados, id);
		if (chamado == null) {
			ResponseEntity<Chamado> resposta = new ResponseEntity<>(HttpStatus.NOT_FOUND);
			return resposta;
		} else {
			ResponseEntity<Chamado> resposta = new ResponseEntity<Chamado>(chamado, HttpStatus.FOUND);
			return resposta;
		}
	}
	
	@PreAuthorize("hasAnyRole('USER')")
	@PostMapping("/chamado/inserir")
	public ResponseEntity<?> inserirChamado(@RequestBody Chamado chamado) {
		HttpStatus status = HttpStatus.CONFLICT;
		if (chamado.getId() == null) {
			if (chamado.getTitulo() != null && chamado.getDescricao() != null && chamado.getDescri_equipamento() != null
			&& chamado.getEquipamento() != null && chamado.getLocal() != null && chamado.getNum_maquina() != null
			&& chamado.getTipo() != null && chamado.getSala() != null && chamado.getPrioridade() != null) {
				chamado.setStatus("Aberto");
				repositorio.save(chamado);
				status = HttpStatus.CREATED;
			} else {
				status = HttpStatus.BAD_REQUEST;
			}
		}
		return new ResponseEntity<>(status);

	}
	
	@PutMapping("/chamado/atualizar")
	public ResponseEntity<?> atualizarChamado(@RequestBody Chamado atualizacao) {
		HttpStatus status = HttpStatus.CONFLICT;
		Chamado selecionado = null;
		List<Chamado> chamados = repositorio.findAll();
		for (Chamado chamado : chamados) {
			if (chamado.getId().equals(atualizacao.getId())) {
				selecionado = chamado;
			}
		}
		
		if (selecionado != null) {
			ChamadoAtualizador atualizador = new ChamadoAtualizador();
			atualizador.atualizarDados(selecionado, atualizacao);
			repositorio.save(selecionado);
			status = HttpStatus.OK;
		} else {
			status = HttpStatus.BAD_REQUEST;
		}
		return new ResponseEntity<>(status);
	}
	
	@PreAuthorize("hasAnyRole('USER')")
	@DeleteMapping("/chamado/deletar")
	public ResponseEntity<?> deletarChamado(@RequestBody Chamado delecao) {
		HttpStatus status = HttpStatus.BAD_REQUEST;
		List<Chamado> chamados = repositorio.findAll();
		Chamado selecionado = null;
		for (Chamado chamado : chamados) {
			if (chamado.getId().equals(delecao.getId())) {
				selecionado = chamado;
			}
		}
		if (selecionado != null) {
			repositorio.delete(selecionado);
			status = HttpStatus.OK;
		}
		return new ResponseEntity<>(status);
	}
	
	@PreAuthorize("hasAnyRole('SUPPORT')")
	@PutMapping("/chamado/solucao")
	public ResponseEntity<?> inserirComentario(@RequestBody Chamado chamado) {
		HttpStatus status = HttpStatus.CONFLICT;
		List<Chamado> chamados = repositorio.findAll();
		Chamado selecionado = selecionador.selecionar(chamados, chamado.getId());
		if (selecionado != null) {
			if(selecionado.getSolucao() == null) {
				ChamadoSolucionar atualizador = new ChamadoSolucionar();
				atualizador.inserirComentario(selecionado, chamado);
				repositorio.save(selecionado);
				status = HttpStatus.OK;
			} else {
				status = HttpStatus.BAD_REQUEST;
			}
		}
		return new ResponseEntity<>(status);
	}
}

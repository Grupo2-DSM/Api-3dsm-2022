package com.example.banco.demo.controles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.banco.demo.entidades.Chamado;
import com.example.banco.demo.modelo.ChamadoAtualizador;
import com.example.banco.demo.modelo.ChamadoSelecionador;
import com.example.banco.demo.repositorios.ChamadoRepositorio;

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
	
	@PostMapping("/chamado/inserir")
	public ResponseEntity<?> inserirChamado(@RequestBody Chamado chamado) {
		HttpStatus status = HttpStatus.CONFLICT;
		if (chamado.getId() == null) {
			chamado.setStatus("Aberto");
			repositorio.save(chamado);
			status = HttpStatus.CREATED;
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
}

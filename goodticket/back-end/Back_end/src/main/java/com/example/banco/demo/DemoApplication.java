package com.example.banco.demo;

import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

import com.example.banco.demo.entidades.Chamado;
import com.example.banco.demo.entidades.Cliente;
import com.example.banco.demo.repositorios.ChamadoRepositorio;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	@Component
	public static class Runner implements ApplicationRunner {
		@Autowired
		public ChamadoRepositorio repositorioChamado;

		@Override
		public void run(ApplicationArguments args) throws Exception {
			
			Cliente relator = new Cliente();
			
			relator.setNome("Daniel");
			relator.setEmail("daniel123@gmail.com");
			relator.setDepartamento("Testes");
			relator.setCargo("Aleatório");
			
			Chamado chamado = new Chamado();
			
			chamado.setRelator(relator);
			chamado.setTitulo("Chamado teste");
			chamado.setDescricao("Só um chamado teste msm");
			chamado.setTipo("software");
			chamado.setEquipamento("Notebook");
			chamado.setDescri_equipamento("Especificações aqui!!!");
			chamado.setNum_maquina(0);
			chamado.setLocal("Fatec SJC");
			chamado.setSala(303);
			chamado.setDatahora(Calendar.getInstance().getTime());
			chamado.setResolucao("Resolução aleatória");
			chamado.setResolvido("Sim");
			chamado.setDificuldade("Fácil");
			chamado.setPrioridade("Baixa");
			
			//repositorioChamado.save(chamado);
		}

	}

}

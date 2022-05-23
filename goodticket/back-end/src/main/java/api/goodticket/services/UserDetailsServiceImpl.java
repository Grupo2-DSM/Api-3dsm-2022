package api.goodticket.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import api.goodticket.adapters.UserDetailsImpl;
import api.goodticket.entities.Credencial;
import api.goodticket.entities.Usuario;
import api.goodticket.repositories.UsuarioRepositorio;
import api.goodticket.selectors.UsuarioSelecionador;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
	
	@Autowired
	private UsuarioRepositorio repositorio;
	
	@Autowired 
	private UsuarioSelecionador selecionador;
	
	@Override
	public UserDetails loadUserByUsername(String email) 
			throws UsernameNotFoundException{
				List<Usuario> usuarios = repositorio.findAll();
				Usuario usuario = selecionador.selecionar(usuarios, email);
				if (usuario == null) {
					throw new UsernameNotFoundException(email);
				}
				Credencial credencial = usuario.getCredencial();
				return new UserDetailsImpl(credencial.getEmail(), credencial.getSenha(), usuario.getCargos());
	}
}

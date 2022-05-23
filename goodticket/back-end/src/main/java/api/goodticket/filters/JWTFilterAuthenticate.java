package api.goodticket.filters;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import api.goodticket.dto.CredencialDTO;
import api.goodticket.jwt.JWTGenerator;

public class JWTFilterAuthenticate extends UsernamePasswordAuthenticationFilter{
	
	private AuthenticationManager authenticationManager;
	private JWTGenerator jwtTokenGenerator;
	
	public JWTFilterAuthenticate(AuthenticationManager authenticationManager, JWTGenerator jwtTokenGenerator) {
		this.authenticationManager = authenticationManager;
		this.jwtTokenGenerator = jwtTokenGenerator;
	}
	
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) 
		throws AuthenticationException{
			try {
				CredencialDTO credencialDto = new ObjectMapper().readValue(request.getInputStream(),
						CredencialDTO.class);
				UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
						credencialDto.getEmail(), credencialDto.getSenha(), new ArrayList<>());
				
				Authentication authentication = authenticationManager.authenticate(authenticationToken);
				return authentication;
			} catch (Exception e){
				throw new RuntimeException(e.getCause());
			}
	}
	
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authenticationResult)
			throws IOException, ServletException{
		UserDetails usuarioSpring = (UserDetails) authenticationResult.getPrincipal();
		String email = usuarioSpring.getUsername();
		String jwtToken = jwtTokenGenerator.generateToken(email);
		response.addHeader("Authorization", "Bearer " + jwtToken);
	}
}

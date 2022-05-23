package api.goodticket.filters;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import api.goodticket.jwt.JWTGenerator;

public class JWTFilterAuthorize extends BasicAuthenticationFilter{

		private JWTGenerator jwtTokenGenerator;
		private UserDetailsService service;
		
		public JWTFilterAuthorize(AuthenticationManager authenticationManager, JWTGenerator jwtTokenGenerator,
				UserDetailsService service) {
			super(authenticationManager);
			this.jwtTokenGenerator = jwtTokenGenerator;
			this.service = service;
		}
		
		@Override
		protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws IOException, ServletException{
			String header = request.getHeader("Authorization");
			if (header != null && header.startsWith("Bearer ")) {
				String[] parts = header.split(" ");
				String jwtToken = parts[1];
				UsernamePasswordAuthenticationToken authenticationToken = obterAutenticacao(jwtToken);
				if(authenticationToken != null) {
					SecurityContextHolder.getContext().setAuthentication(authenticationToken);
				}
			}
			chain.doFilter(request, response);
		}
		
		private UsernamePasswordAuthenticationToken obterAutenticacao(String jwtToken) {
			if(jwtTokenGenerator.validateToken(jwtToken)) {
				String email = jwtTokenGenerator.obterEmail(jwtToken);
				UserDetails userSpring = service.loadUserByUsername(email);
				return new UsernamePasswordAuthenticationToken(userSpring, userSpring.getPassword(), userSpring.getAuthorities());
			}
			return null;
		}
}

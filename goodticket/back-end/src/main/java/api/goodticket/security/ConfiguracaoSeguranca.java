package api.goodticket.security;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import api.goodticket.filters.JWTFilterAuthenticate;
import api.goodticket.filters.JWTFilterAuthorize;
import api.goodticket.jwt.JWTGenerator;
import api.goodticket.services.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class ConfiguracaoSeguranca extends WebSecurityConfigurerAdapter{

	@Autowired
	private UserDetailsServiceImpl service;
	
	@Autowired
	private JWTGenerator JwtTokenGenerator;
	
	private static final String[] rotasPublicas = {"/chamados", "/redefinirSenha", "/chamado/atualizar", "/", "/chamados/fechados",
			"/chamado/inserir", "/chamados/abertos", "/usuario/autenticar", "/chamado/solucao", "/chamado/comentario", "/usuario/cadastro", "/chamados/abertos-em-andamento"};
	
	@Override
	protected void configure(HttpSecurity http) throws Exception{
		http.cors().and().csrf().disable();
		
		http.authorizeHttpRequests().antMatchers(rotasPublicas).permitAll()
		.anyRequest().authenticated();
		http.addFilter(new JWTFilterAuthenticate(authenticationManager(), JwtTokenGenerator));
		http.addFilter(new JWTFilterAuthorize(authenticationManager(), JwtTokenGenerator, service));
		
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder autenticador) throws Exception{
		autenticador.userDetailsService(service).passwordEncoder(new BCryptPasswordEncoder());
	}
	
	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
		configuration.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "DELETE", "OPTIONS"));
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}
	
	@Bean
	@Override
	protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }
}

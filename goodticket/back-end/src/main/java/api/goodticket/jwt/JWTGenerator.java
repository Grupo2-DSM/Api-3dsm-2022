package api.goodticket.jwt;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JWTGenerator {

	@Value("${jwt.secret}")
	private String secret;
	
	@Value("${jwt.expiration}")
	private Long expiration;
	
	public String generateToken(String email) {
		Date expirationTime = new Date(System.currentTimeMillis() + expiration);
		
		return Jwts.builder().setSubject(email).setExpiration(expirationTime)
				.signWith(SignatureAlgorithm.HS512, secret.getBytes()).compact();
	}
	
	private Claims obterReivindicacoes(String jwtToken) {
		try {
			return Jwts.parser().setSigningKey(secret.getBytes()).parseClaimsJws(jwtToken).getBody();
		}catch (Exception e){
			return null;
		}
	}
	
	public String obterEmail(String jwtToken) {
		Claims reivindicacoes = obterReivindicacoes(jwtToken);
		if (reivindicacoes != null) {
			String email = reivindicacoes.getSubject();
			return email;
		}
		return null;
	}
	
	public boolean validateToken(String jwtToken) {
		Claims reivindicacoes = obterReivindicacoes(jwtToken);
		if (reivindicacoes != null) {
			String email = reivindicacoes.getSubject();
			Date expirationDate = reivindicacoes.getExpiration();
			Date now = new Date(System.currentTimeMillis());
			if (email != null && expirationDate != null && now.before(expirationDate)) {
				return true;
			}
		}
		return false;
	}
}

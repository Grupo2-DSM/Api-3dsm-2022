package api.goodticket.adapters;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import api.goodticket.models.Cargo;

public class UserDetailsImpl implements UserDetails{
	
	private String email;
	private String senha;
	private Collection<? extends GrantedAuthority> authorities;
	
	public UserDetailsImpl() {
	}
	
	public UserDetailsImpl(String email, String senha, List<Cargo> cargos) {
		this.email = email;
		this.senha = senha;
		this.generateAuthorities(cargos);
	}

	private void generateAuthorities(List<Cargo> cargos) {
		List<SimpleGrantedAuthority> authoritiesCargos = new ArrayList<>();
		for (Cargo cargo : cargos) {
			authoritiesCargos.add(new SimpleGrantedAuthority(cargo.name()));
		}
		this.authorities = authoritiesCargos;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.authorities;
	}

	@Override
	public String getPassword() {
		return this.senha;
	}

	@Override
	public String getUsername() {
		return this.email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}

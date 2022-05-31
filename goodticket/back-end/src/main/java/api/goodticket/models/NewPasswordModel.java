package api.goodticket.models;

import lombok.Data;

@Data
public class NewPasswordModel {
	private String email;
	private String senha;
	private String confirmarSenha;
}

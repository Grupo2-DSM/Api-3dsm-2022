import { URI } from "../enum/uri";
import axiosLogin from "../login/axiosLogin";
import ControleSessao from "../login/ControleSessao";

export default class UserRequests {

    public async loginRequest(body: object) {
        try {
            const resposta = await axiosLogin.post(URI.LOGIN_USUARIOS, body)
            return resposta.data;
        } catch (err) {
            console.log(err)
            window.alert("Credenciais incorretas.")
        }
    }

    public async redefinirSenha(body: object) {
        try {
            const resposta = await axiosLogin.put(URI.SENHA_REDEFINIR, body, {
                headers: {
                    'Authorization': 'Bearer ' + ControleSessao.getToken()
                }
            })
            return resposta.data
        } catch (err) {
            console.log(err)
            window.alert("Erro ao redefinir senha.")
        }
    }


    public async getUsers() {
        try {
            const resposta = await axiosLogin.get(URI.USUARIOS, {
                headers: {
                    'Authorization': 'Bearer ' + ControleSessao.getToken()
                }
            }
            )
            return resposta.data
        } catch (err) {
            console.log(err)
        }
    }

    public async newUser(body: object){
        try {
            const resposta = await axiosLogin.post(URI.INSERT_USUARIOS, body, {
                headers: {
                    'Authorization': `Bearer ${ControleSessao.getToken()}`
                }
            })
            window.alert("Usuário cadastrado.")
            window.location.href = '/page/home'
            return resposta.data
        } catch (err) {
            console.log(err)
            window.alert("Ocorreu um erro!")
        }
    }
}
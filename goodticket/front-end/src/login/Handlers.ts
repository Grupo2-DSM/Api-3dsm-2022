import TicketRequests from "../requests/ticketRequests";
import UserRequests from "../requests/userRequests";
import { CredenciaisNewPassword, CredenciaisUsuario } from "./Usuario"


export default class Handlers {
    public handleLogin(usuario: CredenciaisUsuario) {
        let body = {
            email: usuario.email,
            senha: usuario.senha
        }

        let userReq = new UserRequests();
        return userReq.loginRequest(body);
    }

    public handleNewPassword(usuario: CredenciaisNewPassword) {
        let body = {
            email: usuario.email,
            senha: usuario.senha,
            confirmarSenha: usuario.confirmarSenha
        }

        let userReq = new UserRequests()
        return userReq.redefinirSenha(body)
    }

    public handleUsers() {

        let userReq = new UserRequests()
        return userReq.getUsers()
    }

    public handleNewTicket(chamado: object) {
        let ticketReq = new TicketRequests()
        return ticketReq.newTicket(chamado)
    }

    public handleNewUser(usuario: object) {
        let userReq = new UserRequests()
        return userReq.newUser(usuario)
    }

    public handleNewComment(comentario: object){
        let ticketReq = new TicketRequests()
        return ticketReq.newComment(comentario)
    }

    public handleNewSolution(solucao: object){
        let ticketReq = new TicketRequests()
        return ticketReq.newSolution(solucao)
    }
}
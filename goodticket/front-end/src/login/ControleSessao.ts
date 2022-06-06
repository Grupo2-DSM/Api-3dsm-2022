import { DadosUsuario } from "./Usuario"

export default new class ControleSessao{
    clear(){
        sessionStorage.clear()
    }

    getToken(){
        const sessionToken = sessionStorage.getItem('authentication_token')

        if (sessionToken == null){
            return null
        }

        const token: string = JSON.parse(sessionToken)
        return token
    }

    removeToken(){
        sessionStorage.removeItem('authentication_token')
        sessionStorage.removeItem('dados_usuario')
    }

    setToken(token: string){
        sessionStorage.setItem('authentication_token', JSON.stringify(token))
    }

    setUserInfo(usuario: DadosUsuario){
        sessionStorage.setItem('dados_usuario', JSON.stringify(usuario))
    }

    getUserInfo(){
        const sessionUser = sessionStorage.getItem('dados_usuario')

        if (sessionUser == null){
            return null
        }

        const userInfo: string = JSON.stringify(sessionUser)
        return sessionUser
    }

    getUserName(){
        const userNome = this.getUserInfo()?.split(',')[2].split(':')[1]
        return userNome?.replaceAll('"', '')
    }

    getUserEmail(){
        const userEmail = this.getUserInfo()?.replaceAll('{', '').replaceAll('}', '').replaceAll('"', '').replaceAll(":", ',').split(',')[2]
        return userEmail
    }

    getUserSetor(){
        const userSetor = this.getUserInfo()?.split(',')[3].split(':')[1]
        return userSetor?.replaceAll('"', '')
    }

    getUserCargo(){
        const userCargo = this.getUserInfo()?.split(',')[4].split(':')[1].split("_")[1].split('"')[0]
        return userCargo
    }

    setChamado(chamado: any){
        sessionStorage.setItem('dados_chamado', JSON.stringify(chamado))
    }

    removeChamado(){
        sessionStorage.removeItem('dados_chamado')
    }

}

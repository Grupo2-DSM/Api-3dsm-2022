import { type } from "os";
import { URI } from "../enum/uri";
import ControleSessao from "../login/ControleSessao";
import Cadastrador from "./cadastrador";

export default class CadastradorUsuario implements Cadastrador{
    cadastrar(objeto: Object): void{
        fetch(URI.INSERT_USUARIOS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ControleSessao.getToken()}`
            },
            body: JSON.stringify(objeto)
        })
    }
} 


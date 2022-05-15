import { type } from "os";
import { URI } from "../enum/uri";
import Cadastrador from "./cadastrador";

export default class CadastradorUsuario implements Cadastrador{
    cadastrar(objeto: Object): void{
        fetch(URI.INSERT_USUARIOS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }
} 


import { type } from "os";
import { URI } from "../enum/uri";
import Cadastrador from "./cadastrador";

export default class CadastradorChamado implements Cadastrador{
    cadastrar(objeto: Object): void{
        fetch(URI.INSERT_CHAMADOS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }
}
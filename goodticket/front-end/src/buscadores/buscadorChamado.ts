import { URI } from "../enum/uri";
import Buscador from "./buscador";

export default class BuscadorChamado implements Buscador{
    public async buscar(){
        let json = await fetch(URI.CHAMADOS).then(resposta => resposta.json())
        return json
    }
}
import { URI } from "../enum/uri";
import Buscador from "./buscador";

export default class BuscadorChamadoSolucoes implements Buscador {
  public async buscar() {
    let json = await fetch(URI.SOLUCOES_CHAMADOS).then(resposta => resposta.json())
    return json
  }
}
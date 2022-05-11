import { Component } from 'react';
import { URI } from '../../enum/uri';
import { Navbar } from "../../components/Navbar";
import '../styles/viewTickets.scss';

export class ViewTickets extends Component {
        state = {
            chamados: []
        }

        async componentDidMount(){
            const resposta = await fetch(URI.CHAMADOS)
            const body = await resposta.json()
            this.setState({chamados:body})
    }

    render(){
        const {chamados} = this.state
        return (
            <div>
                <Navbar />
                <div id="view-ticket-content">
                    <main>
                        <div className="main-search-area">
                            <input type="text" placeholder="Procure pelo nome do chamado" />
                            <select>
                                <option selected>Selecione um filtro</option>
                                <option>Em andamento</option>
                                <option>Finalizado</option>
                            </select>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Titulo</th>
                                    <th>Equipamento</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chamados.map(chamado => (
                                    <tr key={chamado['id']}>
                                        <td>{chamado['id']}</td>
                                        <td>{chamado['titulo']}</td>
                                        <td>{chamado['equipamento']}</td>
                                        <td>{chamado['status']}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </main>
                </div>
            </div>
        );
    }
}
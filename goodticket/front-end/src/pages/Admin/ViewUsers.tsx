import { Component } from 'react';
import { Navbar } from "../../components/Navbar";
import '../styles/viewTickets.scss';

export class ViewUsers extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <div id="view-ticket-content">
                    <main>
                        <div className="main-search-area">
                            <input type="text" placeholder="Procure pelo nome do usuário" />
                            <select>
                                <option selected>Selecione um filtro</option>
                                <option>Administrador</option>
                                <option>Suporte</option>
                                <option>Usuário comum</option>
                            </select>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Cargo</th>
                                    <th>Setor</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td>Vinicius</td>
                                        <td>vinicius@gmail.com</td>
                                        <td>Administrador</td>
                                        <td>RH</td>
                                    </tr>
                            </tbody>
                        </table>
                    </main>
                </div>
            </div>
        );
    }
}
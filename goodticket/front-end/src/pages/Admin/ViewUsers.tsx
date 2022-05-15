import { URI } from '../../enum/uri';

import { Component } from 'react';
import { Navbar } from "../../components/Navbar";

import '../../styles/viewTickets.scss';
import '../../styles/global.scss';


export class ViewUsers extends Component {
    state = {
        usuarios: []
    }

    async componentDidMount(){
        const resposta = await fetch(URI.USUARIOS)
        const body = await resposta.json()
        this.setState({usuarios:body})
    }

    render(){
        const {usuarios} = this.state
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
                                    <th><span>Nome</span></th>
                                    <th><span>Email</span></th>
                                    <th><span>Cargo</span></th>
                                    <th><span>Setor</span></th>
                                </tr>
                            </thead>
                            <tbody>
                            {usuarios.map(usuario => (
                                    <tr key={usuario['id']}>
                                        <td><span>{usuario['nome']}</span></td>
                                        <td><span>{usuario['email']}</span></td>
                                        <td><span>{usuario['cargo']}</span></td>
                                        <td><span>{usuario['setor']}</span></td>
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

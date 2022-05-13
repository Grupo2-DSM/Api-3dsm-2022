import { Component } from 'react';

import { Button } from '../../components/Button';
import { Navbar } from '../../components/Navbar';

import '../../styles/newTicket.scss';
import '../../styles/global.scss';

export class EditTicket extends Component{
    render() {
        return (
            <div>
                <Navbar />
                <div id="new-ticket-content">
                    <main>
                        <div id="main-ticket-content">
                            <form >
                                <div className="form-group-textarea">
                                    <input id="titulo" type="text" placeholder="Título do chamado" />
                                    <textarea id="descricao" placeholder="Descrição do chamado" />
                                </div>
                                
                                <div id="select-options">
                                    <select id="prioridade">
                                        <option selected>Prioridade</option>
                                        <option>Alta</option>
                                        <option>Baixa</option>
                                    </select>
                                    <Button type='submit' name='action'>Salvar chamado</Button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

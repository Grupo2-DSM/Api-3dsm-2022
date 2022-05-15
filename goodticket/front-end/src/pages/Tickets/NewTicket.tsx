import { Component } from 'react';
import CadastradorChamado from '../../cadastradores/cadastradorChamado';

import { Button } from '../../components/Button';
import { Navbar } from '../../components/Navbar';

import '../../styles/newTicket.scss';
import '../../styles/global.scss';

export class NewTicket extends Component{
    private titulo!: string
    private descricao!: string
    private local!: string
    private tipo!: string
    private equipamento!: string
    private descri_equipamento!: string
    private num_maquina!: number
    private sala!: number
    private prioridade!: string

    constructor(props: any){
        super(props)
        this.capturarTitulo = this.capturarTitulo.bind(this)
        this.capturarDescricao = this.capturarDescricao.bind(this)
        this.capturarTipo = this.capturarTipo.bind(this)
        this.capturarEquipamento = this.capturarEquipamento.bind(this)
        this.capturarLocal = this.capturarLocal.bind(this)
        this.capturarDescriEquipamento = this.capturarDescriEquipamento.bind(this)
        this.capturarNumMaquina = this.capturarNumMaquina.bind(this)
        this.capturarSala = this.capturarSala.bind(this)
        this.capturarPrioridade = this.capturarPrioridade.bind(this)
        this.submeterForm = this.submeterForm.bind(this)
        this.cadastrarChamado = this.cadastrarChamado.bind(this)
    }

    public cadastrarChamado(objeto:Object){
        let cadastrador = new CadastradorChamado()
        cadastrador.cadastrar(objeto)
    }

    public capturarTitulo(evento: any){
        this.titulo = evento.target.value
    }

    public capturarDescricao(evento: any){
        this.descricao = evento.target.value
    }

    public capturarLocal(evento: any){
        this.local = evento.target.value
    }

    public capturarTipo(evento: any){
        this.tipo = evento.target.value
    }

    public capturarEquipamento(evento: any){
        this.equipamento = evento.target.value
    }

    public capturarDescriEquipamento(evento: any){
        this.descri_equipamento = evento.target.value
    }

    public capturarNumMaquina(evento: any){
        this.num_maquina = evento.target.value
    }

    public capturarSala(evento: any){
        this.sala = evento.target.value
    }

    public capturarPrioridade(evento: any){
        this.prioridade = evento.target.value
    }

    public submeterForm(evento: any){
        evento.preventDefault()
        let chamado ={
            titulo: this.titulo,
            descricao: this.descricao,
            tipo: this.tipo,
            equipamento: this.equipamento,
            descri_equipamento: this.descri_equipamento,
            num_maquina: this.num_maquina,
            local: this.local,
            sala: this.sala,
            prioridade: this.prioridade
        }
        this.cadastrarChamado(chamado)
        evento.target.reset()
        window.alert("Chamado criado com sucesso.")
        window.location.href = '/page/home'
    }

    render() {
        return (
            <div id="new-ticket-content">
               <Navbar />
                <main>
                    <div id="main-ticket-content">
                        <form onSubmit={(e) => this.submeterForm(e)}>
                            <div className="form-group-textarea">
                                <input onChange={this.capturarTitulo} id="titulo" type="text" placeholder="Título do chamado" />
                                <textarea onChange={this.capturarDescricao} id="descricao" placeholder="Descrição do chamado" />
                            </div>
                            <div className="form-input">
                                <input onChange={this.capturarLocal} id="local" type='text' placeholder="Local" className="mr"/>
                                <select onChange={this.capturarTipo} id="tipo">
                                    <option>Selecione</option>
                                    <option>Software</option>
                                    <option>Hardware</option>
                                </select>
                            
                                <input onChange={this.capturarSala} id="sala" type="number" placeholder="Sala"  className="mr"/>
                                <input onChange={this.capturarEquipamento} id="equipamento" type="text" placeholder="Equipamento" />
                
                                <input onChange={this.capturarNumMaquina} id="num_maquina" type="number" placeholder="ID do equipamento" className="mr"/>
                                <input onChange={this.capturarDescriEquipamento} id="descri_equipamento" type="text" placeholder="Descrição do equipamento" />
                            </div>
                            <div id="select-options">
                                <select onChange={this.capturarPrioridade} id="prioridade">
                                    <option selected>Prioridade</option>
                                    <option>Alta</option>
                                    <option>Baixa</option>
                                </select>
                            <Button type='submit' name='action'>Criar chamado</Button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}
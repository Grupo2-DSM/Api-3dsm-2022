import { InputTitle, Input, FormContainer, TextArea, FormContent, FormContentRow, Selection, FormContentPriority, Button } from './styles'

import { FaAngleRight } from 'react-icons/fa';
import { Component } from 'react';
import CadastradorChamado from '../../cadastradores/cadastradorChamado';

    
export default class CreateTicket extends Component{
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
        }

        render(){
            return (
                <>
                    <FormContainer onSubmit={(e) => this.submeterForm(e)}>
                        <InputTitle onChange={this.capturarTitulo} id="titulo" type="text" placeholder="Título do chamado" />
                        <TextArea onChange={this.capturarDescricao} id="descricao" placeholder="Descrição do chamado" />
                    
                        <FormContentRow>
                                <FormContent>
                                    <Input onChange={this.capturarLocal} id="local" type='text' placeholder="Local" />
                                    <Selection onChange={this.capturarTipo} id="tipo">
                                        <option>Selecione</option>
                                        <option>Software</option>
                                        <option>Hardware</option>
                                    </Selection>
                                </FormContent>
        
                                <FormContent>
                                    <Input onChange={this.capturarSala} id="sala" type="number" placeholder="Sala" />
                                    <Input onChange={this.capturarEquipamento} id="equipamento" type="text" placeholder="Equipamento" />
                                </FormContent>
        
                                <FormContent>
                                    <Input onChange={this.capturarNumMaquina} id="num_maquina" type="number" placeholder="ID do equipamento" />
                                    <Input onChange={this.capturarDescriEquipamento} id="descri_equipamento" type="text" placeholder="Descrição do equipamento" />
                                </FormContent>
                                <FormContentPriority>
                                    <Selection onChange={this.capturarPrioridade} id="prioridade">
                                        <option selected>Prioridade</option>
                                        <option>Alta</option>
                                        <option>Baixa</option>
                                    </Selection>
                                </FormContentPriority>
                                <Button type='submit' name='action'>Enviar chamado <FaAngleRight/> </Button>
                        </FormContentRow>
                    </FormContainer>
                </>
            );
        }
    }

    

import { Component } from 'react';
import illustrationImg from '../../assets/images/illustrationBusiness.png';
import logoImg from '../../assets/images/Logo.svg';
import CadastradorUsuario from '../../cadastradores/cadastradorUsuario';

import { Button } from '../../components/Button';

import '../../styles/auth.scss';
import '../../styles/global.scss';

export class UserRegister extends Component {
    private nome!: string
    private email!: string
    private setor!: string
    private cargo!: string
    private senha!: string

    constructor(props: any){
        super(props)
        this.capturarNome = this.capturarNome.bind(this)
        this.capturarEmail = this.capturarEmail.bind(this)
        this.capturarSetor = this.capturarSetor.bind(this)
        this.capturarCargo = this.capturarCargo.bind(this)
        this.capturarSenha = this.capturarSenha.bind(this)
        this.submeterForm = this.submeterForm.bind(this)
        this.cadastrarUsuario = this.cadastrarUsuario.bind(this)
    }

    public cadastrarUsuario(objeto:Object){
        let cadastrador = new CadastradorUsuario()
        cadastrador.cadastrar(objeto)
    }

    public capturarNome(evento: any){
        this.nome = evento.target.value
    }

    public capturarEmail(evento: any){
        this.email = evento.target.value
    }

    public capturarSetor(evento: any){
        this.setor = evento.target.value
    }

    public capturarCargo(evento: any){
        this.cargo = evento.target.value
    }

    public capturarSenha(evento: any){
        this.senha = evento.target.value
    }

    public submeterForm(evento: any){
        evento.preventDefault()
        let usuario ={
            nome: this.nome,
            email: this.email,
            setor: this.setor,
            cargo: this.cargo,
            senha: this.senha
        }
        this.cadastrarUsuario(usuario)
        evento.target.reset()
        window.alert("Usuário cadastrado com sucesso")
        window.location.href = '/page/home'
    }

    render(){
        return (
            <div id="page-auth">
                <aside>
                    <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                    <strong>Cadastre usuários em nosso sistema</strong>
                </aside>
                <main>
                    <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                        <form onSubmit={(e) => this.submeterForm(e)} >
                            <input onChange={this.capturarNome}
                                type="text"
                                placeholder="Nome"
                            />
                            <input onChange={this.capturarEmail}
                                type="text"
                                placeholder="Email"
                            />
                            <input onChange={this.capturarSenha} 
                                type="password"
                                placeholder="Senha"
                            />
                            <input onChange={this.capturarSetor}
                                type="text"
                                placeholder="setor"
                            />
                            <select onChange={this.capturarCargo} 
                            className="select" name="select">
                                <option value="Cargos">Cargos</option>
                                <option value="Usuário">Usuário</option>
                                <option value="Suporte">Suporte</option>
                                <option value="Administrador">Administrador</option>
                            </select>
                            <Button type='submit' name='action'>
                                Cadastrar
                            </Button>
                        </form>
                    </div>  
                </main>
            </div>
        );
    }
    }
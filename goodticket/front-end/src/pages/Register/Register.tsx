import { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import illustrationImg from '../../assets/images/illustrationBusiness.png';
import logoImg from '../../assets/images/Logo.svg';
import CadastradorUsuario from '../../cadastradores/cadastradorUsuario';

import { Button } from '../../components/Button';
import ControleSessao from '../../login/ControleSessao';
import Handlers from '../../login/Handlers';

import '../../styles/auth.scss';
import '../../styles/global.scss';

export function UserRegister(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [setor, setSetor] = useState('')
    const [cargo, setCargo] = useState('')
    const [senha, setSenha] = useState('')

    const [autenticado, setAutenticado] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        checarAutenticacao()
    }, [])

    useEffect(() => {
        if (!autenticado || ControleSessao.getUserCargo() != 'ADMIN'){
            navigate('/')
        }
    }, [autenticado, navigate])

    const checarAutenticacao = async () => {
        const token = ControleSessao.getToken()
        if (token == null){
            setAutenticado(false)
        } else {
            setAutenticado(true)
        }
        return autenticado
    }

    let usuario = {
        nome: nome,
        email: email,
        setor: setor,
        cargo: cargo,
        senha: senha
    }

    let handlers = new Handlers()

    const handleNewUser = async (e: any) => {
        e.preventDefault()

        try{
            handlers.handleNewUser(usuario)
            e.target.reset()
        } catch(err){
            console.log(err)
            window.alert("Ocorreu um erro!")
        }
    } 
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Cadastre usuários em nosso sistema</strong>
            </aside>
            <main>
                <div className="main-content">
                <img src={logoImg} alt="Letmeask" />
                    <form onSubmit={(e) => handleNewUser(e)} > 
                        <span>Nome:</span>
                        <input onChange={(e) => setNome(e.target.value)}
                            type="text"
                            placeholder="Nome"
                            required
                        />
                        <span>Email:</span>
                        <input onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder="Email"
                            required
                        />
                        <span>Senha:</span>
                        <input onChange={(e) => setSenha(e.target.value)} 
                            type="password"
                            placeholder="Senha"
                            required
                        />
                        <span>Setor:</span>
                        <input onChange={(e) => setSetor(e.target.value)}
                            type="text"
                            placeholder="Setor"
                            required
                        />
                        <span>Cargo:</span>
                        <select onChange={(e) => setCargo(e.target.value)} 
                        className="select" name="select" required>
                            <option value="Cargos">Cargos</option>
                            <option value="ROLE_USER">Usuário</option>
                            <option value="ROLE_SUPPORT">Suporte</option>
                            <option value="ROLE_ADMIN">Administrador</option>
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


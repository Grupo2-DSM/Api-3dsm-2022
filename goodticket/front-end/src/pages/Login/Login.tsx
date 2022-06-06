import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustrationBusiness.png';
import logoImg from '../../assets/images/Logo.svg';

import { Button } from '../../components/Button';
import { URI } from '../../enum/uri';
import axiosLogin from '../../login/axiosLogin';
import ControleSessao from '../../login/ControleSessao';
import Handlers from '../../login/Handlers';
import { CredenciaisUsuario } from '../../login/Usuario';

import '../../styles/auth.scss';
import '../../styles/global.scss';

export function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [autenticado, setAutenticado] = useState(false)
    const navigate = useNavigate()

    const credenciais: CredenciaisUsuario = {
        senha,
        email
    }

    let handlers = new Handlers();

    useEffect(() => {
        checarAutenticacao()
    }, [])

    useEffect(() => {
        if (autenticado) {
            if (ControleSessao.getUserCargo() == 'SUPPORT') {
                navigate('/page/suporte/home')
            } else if (ControleSessao.getUserCargo() == 'USER') {
                navigate('/page/usuario/home')
            } else if (ControleSessao.getUserCargo() == 'ADMIN') {
                navigate('/page/admin/home')
            }
        }
    }, [autenticado, navigate])

    const handlerLogin = async (e: any) => {
        e.preventDefault()

        try {
            handlers.handleLogin(credenciais).then(data => {
                ControleSessao.setToken(data.token)
                ControleSessao.setUserInfo(data.usuario)
                setAutenticado(true)
            })
        } catch (err) {
            console.log(err)
            setAutenticado(false)
        }
    }

    const checarAutenticacao = async () => {
        const token = ControleSessao.getToken()
        if (token == null) {
            setAutenticado(false)
        } else {
            setAutenticado(true)
        }
        return autenticado
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie tickets de ajuda online.</strong>
                <p>Toda pergunta tem uma resposta.</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <form onSubmit={handlerLogin}>
                        <span>Email:</span>
                        <input
                            type="text"
                            placeholder="Digite o email da sua conta"
                            autoComplete='off'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <span>Senha:</span>
                        <input
                            type="password"
                            placeholder="Digite a sua senha"
                            onChange={(e) => setSenha(e.target.value)}
                            value={senha}
                        />
                        <Button type='submit'> Login </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}

import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustrationBusiness.png';
import logoImg from '../../assets/images/Logo.svg';

import { Button } from '../../components/Button';
import { URI } from '../../enum/uri';
import axiosLogin from '../../login/axiosLogin';

import '../../styles/auth.scss';
import '../../styles/global.scss';

export function Login() {

    const userRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [autenticado, setAutenticado] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setErrMsg('')
    }, [email, senha])

    const handleLogin = async (e:any) => {
        e.preventDefault()

        try{
            const resposta = await axiosLogin.post(URI.LOGIN_USUARIOS,
                JSON.stringify({
                    email,
                    senha}), {
                        headers:{
                            'Content-Type': 'application/json'
                        }
                    })
            if (resposta.status === 200){
                setAutenticado(true)
                window.location.href = '/page/home'
            }
        } catch(err){
            setErrMsg('Ocorreu um erro. (' + err + ')')
            window.alert("Usuário ou senha incorretos!")
        }
    }
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Crie tickets de ajuda online.</strong>
                <p>Toda pergunta tem uma resposta.</p>
            </aside>
            <main>
                <div className="main-content">
                <img src={logoImg} alt="Letmeask" />
                    <form onSubmit={handleLogin}>
                        <input 
                            type="text"
                            placeholder="Email"
                            autoComplete='off'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <input 
                            type="password"
                            placeholder="Senha"
                            onChange={(e) => setSenha(e.target.value)}
                            value={senha}
                        />
                        <Button type='submit'>
                            Login
                        </Button>
                        <Link to="/page/password/new">Esqueceu sua senha? Altere-a</Link>
                    </form>
                </div>
            </main>
        </div>
    );
}

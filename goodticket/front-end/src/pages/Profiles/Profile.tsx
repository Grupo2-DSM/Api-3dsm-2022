import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { NavbarMenu } from '../../components/Navbar';
import ControleSessao from '../../login/ControleSessao';
import Handlers from '../../login/Handlers';
import { CredenciaisNewPassword } from '../../login/Usuario';

import '../../styles/profile.scss';

export function Profile() {

    const [senha, setSenha] = useState('')
    const [email] = useState(ControleSessao.getUserEmail())
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [autenticado, setAutenticado] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        checarAutenticacao()
    }, [])

    useEffect(() => {
        if (!autenticado) {
            navigate('/')
        }
    }, [autenticado, navigate])

    const checarAutenticacao = async () => {
        const token = ControleSessao.getToken()
        if (token == null) {
            setAutenticado(false)
        } else {
            setAutenticado(true)
        }
        return autenticado
    }

    const credenciais: CredenciaisNewPassword = {
        email,
        senha,
        confirmarSenha
    }

    let handlers = new Handlers();

    const handlerNewPassword = (e: any) => {
        e.preventDefault()

        try {
            handlers.handleNewPassword(credenciais)
            window.alert("Senha atualizada com sucesso!")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <NavbarMenu />
            <div id='profile-content'>
                <main>
                    <div>
                        <form onSubmit={(e) => handlerNewPassword(e)}>
                            <div className="principal">
                                <span>Nome:</span>
                                <input placeholder={ControleSessao.getUserName()} />
                                <span>Email:</span>
                                <input type="text" placeholder={ControleSessao.getUserEmail()} />
                                <span>Setor:</span>
                                <input placeholder={ControleSessao.getUserSetor()} />
                                <span>Cargo:</span>
                                <input type="text" placeholder={ControleSessao.getUserCargo()} />
                                <span>Senha nova:</span>
                                <input type="password" placeholder='Digite aqui a sua nova senha' onChange={(e) => setSenha(e.target.value)} />
                                <span>Confirmação de senha:</span>
                                <input type="password" placeholder='Digite novamente a sua senha nova' onChange={(e) => setConfirmarSenha(e.target.value)} />
                            </div>
                            <div className='botao'>
                                <Button type='submit' name='action'>Alterar Senha</Button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    )
}

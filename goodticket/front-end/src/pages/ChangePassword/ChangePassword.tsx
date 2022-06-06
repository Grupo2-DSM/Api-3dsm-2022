import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { NavbarMenu } from '../../components/Navbar';
import ControleSessao from '../../login/ControleSessao';
import Handlers from '../../login/Handlers';
import { CredenciaisNewPassword, CredenciaisUsuario } from '../../login/Usuario';

import '../../styles/changePass.scss';

export function ChangePassword() {

    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState(ControleSessao.getUserEmail())
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [autenticado, setAutenticado] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        checarAutenticacao()
    }, [])

    useEffect(() => {
        if (!autenticado){
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
            <div>
                <main>
                    <div>
                        <form onSubmit={(e) => handlerNewPassword(e)}>
                            <div className="principal">
                                <input placeholder={ControleSessao.getUserName()}/>
                                <input type="text" placeholder={ControleSessao.getUserEmail()} />
                                <input placeholder={ControleSessao.getUserSetor()} />
                                <input placeholder='Nova senha' onChange={(e) => setSenha(e.target.value)}/>
                                <input placeholder='Confirmar senha' onChange={(e) => setConfirmarSenha(e.target.value)}/>
                                <input type="text" placeholder={ControleSessao.getUserCargo()}/>
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

import { useNavigate } from 'react-router-dom';
import { NavbarMenu } from '../../../components/Navbar';
import { Button } from '../../../components/Button';
import { useEffect, useState } from 'react';

import ControleSessao from '../../../login/ControleSessao';

import '../../../styles/home.scss';
import '../../../styles/global.scss';



export function HomeAdmin() {
    const navigate = useNavigate();
    const [autenticado, setAutenticado] = useState(true);

    useEffect(() => {
        checarAutenticacao()
    }, [])

    useEffect(() => {
        if (!autenticado || ControleSessao.getUserCargo() != 'ADMIN') {
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

    return (
        <div id="home-content">
            <NavbarMenu />
            <main>
                <div className='main-content'>
                    <Button onClick={() => navigate('/page/register')}>
                        Criar usuários
                    </Button>

                    <Button onClick={() => navigate('/page/admin/view/usuarios')}>
                        Visualizar usuários na aplicação
                    </Button>

                    <Button onClick={() => navigate('/page/admin/analisedados')}>
                        Análise de Dados
                    </Button>

                    <Button onClick={() => navigate('/page/tickets/solutions')}>
                        Banco de Soluções
                    </Button>
                </div>
            </main>
        </div>
    );
};
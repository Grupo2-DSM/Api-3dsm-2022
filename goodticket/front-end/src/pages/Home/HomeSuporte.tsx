import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { NavbarMenu } from '../../components/Navbar';

import '../../styles/home.scss';
import '../../styles/global.scss';
import { useEffect, useState } from 'react';
import ControleSessao from '../../login/ControleSessao';

export function HomeSuporte() {
    const navigate = useNavigate();
    const [autenticado, setAutenticado] = useState(true);

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

    return (
        <div id="home-content">
            <NavbarMenu />
            <main>
                <div className='main-content'>
                    <Button onClick={() => navigate('/page/tickets/view')}>
                        Verificar meus chamados
                    </Button>
                    <Button onClick={() => navigate('/page/tickets/solutions')}>
                        Banco de Soluções
                    </Button>
                </div>
            </main>
        </div>
    );
};

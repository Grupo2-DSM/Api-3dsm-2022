import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Navbar } from '../../components/Navbar';

import '../../styles/home.scss';
import '../../styles/global.scss';

export function Home() {
    const navigate = useNavigate();

    return (
        <div id="home-content">
            <Navbar />
            <main>
                <div className='main-content'>
                    <Button onClick={() => navigate('/page/tickets/new')}>
                        Abrir Chamado
                    </Button>

                    <Button onClick={() => navigate('/page/tickets/view')}>
                        Verificar meus chamados
                    </Button>

                    <Button onClick={() => navigate('/page/register')}>
                        Criar usuários
                    </Button>

                    <Button onClick={() => navigate('/page/admin/users/view')}>
                        Visualizar usuários na aplicação
                    </Button>
                </div>
            </main>
        </div>
    );
};

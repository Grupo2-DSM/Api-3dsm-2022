import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { NavbarMenu } from '../../components/Navbar';

import '../../styles/home.scss';
import '../../styles/global.scss';

export function HomeAdmin() {
    const navigate = useNavigate();

    return (
        <div id="home-content">
            <NavbarMenu />
            <main>
                <div className='main-content'>
                    <Button onClick={() => navigate('/page/tickets/new')}>
                        Abrir Chamado
                    </Button>

                    <Button onClick={() => navigate('/page/register')}>
                        Criar usuários
                    </Button>

                    <Button onClick={() => navigate('/page/admin/users/view')}>
                        Visualizar usuários na aplicação
                    </Button>
                    <Button onClick={() => navigate('/page/tickets/solutions')}>
                        Banco de Soluções
                    </Button>
                </div>
            </main>
        </div>
    );
};

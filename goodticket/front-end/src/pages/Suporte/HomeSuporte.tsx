import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { NavbarMenu } from '../../components/Navbar';

import '../../styles/home.scss';
import '../../styles/global.scss';

export function HomeSuporte() {
    const navigate = useNavigate();

    return (
        <div id="home-content">
            <NavbarMenu />
            <main>
                <div className='main-content'>
                    <Button onClick={() => navigate('/page/tickets/view')}>
                        Verificar chamados
                    </Button>
                </div>
            </main>
        </div>
    );
};

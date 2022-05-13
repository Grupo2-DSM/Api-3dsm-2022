import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';

import { Button } from '../../components/Button';
import { Navbar } from '../../components/Navbar';

import '../../styles/home.scss';
import '../../styles/global.scss';

export function Home() {
    return (
        <div id="home-content">
            <Navbar />
            <main>
                <div className='main-content'>
                    <div className="main-title">
                        <p>Seja bem vindo, para abrir um chamado, clique aqui em baixo :)</p>
                        <FaArrowDown />
                    </div>
                    <Button >
                        <Link to="/page/tickets/new">Abrir Chamado</Link>
                    </Button>

                    <div className="main-title">
                        <p>Se já possuir um chamado, clique aqui em baixo :)</p>
                        <FaArrowDown />
                    </div>
                    <Button>
                        <Link to="/page/tickets/view">Verificar meus chamados</Link>
                    </Button>
                </div>
            </main>
        </div>
    );
};

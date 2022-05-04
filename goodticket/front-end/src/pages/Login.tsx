
import illustrationImg from '../assets/images/illustrationBusiness.png';
import logoImg from '../assets/images/Logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';
import '../styles/global.scss';

export function Login() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Crie tickets de ajuda online.</strong>
                <p>SIM</p>
            </aside>
            <main>
                <div className="main-content">
                <img src={logoImg} alt="Letmeask" />
                    <form>
                        <input 
                            type="text"
                            placeholder="Email"
                        />
                        <input 
                            type="password"
                            placeholder="Senha"
                        />
                        <Button type='submit'>
                            Login
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}

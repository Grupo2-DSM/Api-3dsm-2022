import illustrationImg from '../assets/images/illustrationBusinessHello.png';
import logoImg from '../assets/images/Logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';
import '../styles/global.scss';

export function UserRegister() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Cadastre usuários em nosso sistema</strong>
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
                            type="text"
                            placeholder="Nome completo"
                        />
                        <input 
                            type="password"
                            placeholder="Senha"
                        />
                        <input 
                            type="text"
                            placeholder="setor"
                        />
                        <select className="select" name="select">
                            <option value="valor1">Cargos</option>
                            <option value="valor2">Usuário</option>
                            <option value="valor3">Suporte</option>
                            <option value="valor4">Administrador</option>
					    </select>
                        <Button type='submit'>
                            Cadastrar
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}
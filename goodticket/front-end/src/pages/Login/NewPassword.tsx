import illustrationImg from '../../assets/images/illustrationBusiness.png';

import { Button } from '../../components/Button';

import '../../styles/auth.scss';
import '../../styles/global.scss';

export function NewPassword() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Cadastre usuários em nosso sistema</strong>
            </aside>
            <main>
                <div className="main-content">
                <h2>Redefinição de senha</h2>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite sua senha"
                        />
                         <input 
                            type="text"
                            placeholder="Confirme sua senha"
                        />
                        <Button type='submit'>
                            Redefinir senha
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}
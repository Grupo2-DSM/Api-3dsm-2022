import illustrationImg from '../../assets/images/illustrationBusiness.png';

import { Button } from '../../components/Button';

import '../../styles/auth.scss';
import '../../styles/global.scss';

export function NewPassword() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Cadastre usuários em nosso sistema</strong>
            </aside>
            <main>
                <div className="main-content">
                    <h2>Redefinição de senha</h2>
                    <form>
                        <span>Senha nova:</span>
                        <input type="text" placeholder="Digite aqui a sua senha nova" />
                        <span>Confirme a senha nova:</span>
                        <input type="text" placeholder="Digite novamente a sua senha nova" />
                        <Button type='submit'> Redefinir senha </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}
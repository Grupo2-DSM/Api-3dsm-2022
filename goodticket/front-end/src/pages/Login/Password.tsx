import illustrationImg from '../../assets/images/illustrationBusiness.png';

import { Button } from '../../components/Button';

import '../../styles/auth.scss';
import '../../styles/global.scss';

export function Password() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Esqueceu a senha ? Redefina</strong>
                <p>Envie um email de confirmação para poder redefinir</p>
            </aside>
            <main>
                <div className="main-content">
                    <h2>Redefinição de senha</h2>
                    <form>
                        <span>Email:</span>
                        <input
                            type="text"
                            placeholder="Digite o email associado a sua conta"
                        />
                        <Button type='submit'> Redefinir senha </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}
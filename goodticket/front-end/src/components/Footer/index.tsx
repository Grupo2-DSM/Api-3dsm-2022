import { FooterContainer, FooterContent, FooterText} from './styles'


export default function Footer(){
    return (
        <>
            <FooterContainer>
                <FooterContent>
                    <FooterText>
                        <p>
                            <strong>GoodTicket</strong>
                            <br />
                            <small>
                                Desenvolvido por
                                <a href="https://github.com/Grupo2-DSM/Api-3dsm-2022"  rel="noreferrer" target="_blank">Equipe GoodTicket FATEC</a>
                            </small>
                        </p>
                    </FooterText>
                </FooterContent>
            </FooterContainer>
        </>
    )
}
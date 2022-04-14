import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container,Row , Col, Button } from './styles';

export default function Home(){
    return (
        <Container>
            <Row>
                <Col>
                    <h1>
                        <span>GoodTicket</span>
                    </h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <p>
                        Seja bem vindo, para abrir um chamado, clique aqui em baixo :)
                    </p>
                    <FontAwesomeIcon icon={faArrowTurnDown} size="1x" />
                    <Button>Abrir chamado</Button>
                </Col>
            </Row>

            <Row>
                <Col>
                    <p>
                        Se já possuir um chamado, clique aqui em baixo :)
                    </p>
                    <FontAwesomeIcon icon={faArrowTurnDown} size="1x" />
                    <Button>Verificar chamados</Button>
                </Col>
            </Row>
        </Container>
    );
}
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import ControleSessao from "../login/ControleSessao";

import LogoImg from "../assets/images/WhiteLogo.svg";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.scss';
import { DropdownMenu } from "./DropdownMenu";


export function NavbarMenu() {
    const navigate = useNavigate();

    const handlerLogout = async (e: any) => {
        e.preventDefault()
    
        try {
          ControleSessao.removeToken()
          navigate('/')
        } catch (err) {
          console.log(err)
        }
    }

    return(
        <Navbar id="nav-content" expand="sm">
            <Container>
                <Navbar.Brand>
                    <img src={LogoImg} alt="goodticket" onClick={() => navigate('/')}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" >
                    <Navbar.Text >
                        <Nav >
                            <NavDropdown
                                id="basic-nav-dropdown"
                                title={<DropdownMenu/>}
                                menuVariant="ligth"
                                >
                                <NavDropdown.Item onClick={() => navigate('/page/profile')}>Perfil</NavDropdown.Item>
                                <NavDropdown.Item onClick={(e) => handlerLogout(e)}>Sair</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
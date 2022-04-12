import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo,MobileIcon, NavMenu, NavLink} from './styles';

export default function Navbar(){
    return (
        <>
           <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        GoodTicket
                    </NavLogo>

                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    
                    <NavMenu>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                        <NavLink to='/newTicket'>
                            Abrir chamados
                        </NavLink>
                        <NavLink to='/ticket'>
                            Meus chamados
                        </NavLink>
                    </NavMenu>
                </NavbarContainer>
           </Nav>
        </>
    );
};
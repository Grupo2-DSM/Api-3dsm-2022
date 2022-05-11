import LogoImg from "../assets/images/WhiteLogo.svg";
import { DropdownMenu } from "./DropdownMenu";
import '../styles/navbar.scss';

export function Navbar() {
    return (
        <header>
            <img src={LogoImg} alt="goodticket" />
            <DropdownMenu />
        </header>
    )
}
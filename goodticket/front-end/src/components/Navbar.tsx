import LogoImg from "../assets/images/WhiteLogo.svg";

import { useNavigate } from "react-router-dom";

import { DropdownMenu } from "./DropdownMenu";
import '../styles/navbar.scss';

export function Navbar() {
    const navigate = useNavigate();

    return (
        <header>
            <img src={LogoImg} alt="goodticket" onClick={() => navigate('/page/home')}/>
            <DropdownMenu />
        </header>
    )
}

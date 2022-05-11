import { FaAngleDown } from 'react-icons/fa';
import '../styles/dropdownMenu.scss';

export function DropdownMenu() {
    return (
        <div id="content">
            <span>Bem vindo, Fulano</span>
            <button>
                <FaAngleDown size={25} color="#fefefe"/>
            </button>
        </div>
    );
}
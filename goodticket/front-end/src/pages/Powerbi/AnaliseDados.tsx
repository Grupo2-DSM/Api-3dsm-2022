import { SetStateAction, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { NavbarMenu } from "../../components/Navbar";
import { Button } from '../../components/Button';

import '../../styles/analisedados.scss';
import '../../styles/customStyleModal/viewTicketModal.scss'
import '../../styles/customStyleModal/globalAnimationModal.scss'
import '../../styles/global.scss';

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import axiosLogin from "../../login/axiosLogin";
import { URI } from "../../enum/uri";
import ControleSessao from "../../login/ControleSessao";

export function AnaliseDados() {
    const navigate = useNavigate();
    const [autenticado, setAutenticado] = useState(true);

    useEffect(() => {
        checarAutenticacao()
    }, [])

    useEffect(() => {
        if (!autenticado || ControleSessao.getUserCargo() != 'ADMIN') {
            navigate('/')
        }
    }, [autenticado, navigate])

    const checarAutenticacao = async () => {
        const token = ControleSessao.getToken()
        if (token == null) {
            setAutenticado(false)
        } else {
            setAutenticado(true)
        }
        return autenticado
    }
    
    // RENDERIZAÇÃO DA PÁGINA
    return (
        <div>
            <NavbarMenu />
            <div className="iframe">
                <iframe title="Analise de Dados GoodTicket" src="https://app.powerbi.com/view?r=eyJrIjoiYzgxMGRhYTAtYjI4ZC00NGNmLTk0MjMtODNjZWQ3NmI3MjUwIiwidCI6IjhjODQ0ZGY1LWM1Y2YtNDEwYS1hMGY3LWU1ODg1MTk5NzhmYSJ9" frameBorder="0" ></iframe>
            </div>
        </div>
    );
}
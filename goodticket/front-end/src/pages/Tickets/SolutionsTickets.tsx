import { Link, useNavigate } from "react-router-dom";

import { NavbarMenu } from "../../components/Navbar";
import { Button } from '../../components/Button';

import '../../styles/viewTickets.scss';
import '../../styles/customStyleModal/viewTicketModal.scss'
import '../../styles/customStyleModal/globalAnimationModal.scss'
import '../../styles/global.scss';

import "react-responsive-modal/styles.css";
import axiosLogin from "../../login/axiosLogin";
import { URI } from "../../enum/uri";
import { SetStateAction, useEffect, useMemo, useState } from "react";
import Modal from "react-responsive-modal";
import ControleSessao from "../../login/ControleSessao";
import { TableSolution } from "../../components/TableSolution";

export function SolutionsTickets() {
        const [open, setOpen] = useState(false);
        const onOpenModal = () => setOpen(true);
        const onCloseModal = () => setOpen(false);
        const navigate = useNavigate();
        const [chamados, setChamados] = useState([])
        const [titulo, setTitulo] = useState('')
        const [descricao, setDescricao] = useState('')
        const [prioridade, setPrioridade] = useState('')
        const [id, setId] = useState('')
        const [autenticado, setAutenticado] = useState(true)
        
        // AUTENTICAÇÃO DA PÁGINA
        useEffect(() => {
            checarAutenticacao()
        }, [])
        
        const checarAutenticacao = async () => {
            const token = ControleSessao.getToken()
            if (token == null){
                setAutenticado(false)
            } else {
                setAutenticado(true)
            }
        }

        useEffect(() => {
            if (!autenticado){
                navigate('/')
            }
        })
        
        // RENDERIZAÇÃO DA PÁGINA
                    return (
                        <div>
                           <NavbarMenu />
                            <div id="view-ticket-content">
                                <main>
                                <h1>Banco de Soluções</h1>
                                    <TableSolution />
                                    <p id="linkticket">Caso não encontre uma solução, crie um chamado <Link to={"/page/tickets/new"}>aqui!</Link></p>
                                </main>
                            </div>
                        </div>
                    );
                } 
    
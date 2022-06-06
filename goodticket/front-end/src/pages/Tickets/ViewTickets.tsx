import { SetStateAction, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { NavbarMenu } from "../../components/Navbar";
import { TableTicket } from "../../components/TableTicket";

import '../../styles/viewTickets.scss';
import '../../styles/global.scss';


import axiosLogin from "../../login/axiosLogin";
import { URI } from "../../enum/uri";
import ControleSessao from "../../login/ControleSessao";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";


export function ViewTickets({ list = [] }) {
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
    const [tickets, setTickets] = useState([])

    // AUTENTICAÇÃO DA PÁGINA
    useEffect(() => {
        checarAutenticacao()
    }, [])

    const checarAutenticacao = async () => {
        const token = ControleSessao.getToken()
        if (token == null) {
            setAutenticado(false)
        } else {
            setAutenticado(true)
        }
        return autenticado
    }

    useEffect(() => {
        ControleSessao.removeChamado()
        if (!autenticado) {
            navigate('/')
        }
    }, [autenticado, navigate])



    const handleGetAll = async () => {
        const resposta = await axiosLogin.get(URI.CHAMADOS_ABERTOS_EM_ANDAMENTO, {
            headers: {
                'Authorization': `Bearer ${ControleSessao.getToken()}`
            }
        })
        return resposta.data
    }

    const getAllTickets = async () => {
        const allTickets: [] = await handleGetAll()
        if (ControleSessao.getUserCargo() == 'USER') {
            allTickets.forEach(chamado => {
                if (chamado['relator']['email'] == ControleSessao.getUserEmail()) {
                    tickets.push(chamado)
                }
            })
            setChamados(tickets)
        } else {
            setChamados(allTickets)
        }
    }
    useEffect(() => {
        getAllTickets()
    }, []);


    // PESQUISAR POR TITULO DO CHAMADO 
    const [busca, setBusca] = useState('');

    const chamadosFiltrados = useMemo(() => {
        const lowerBusca = busca.toLowerCase();
        return chamados.filter((chamado: any) =>
            chamado['titulo'].toLowerCase().includes(lowerBusca)
        );
    }, [busca, chamados]);


    // ORDENAR CHAMADOS POR TITULO
    const [order, setOrder] = useState(1)
    const [colunmOrder, setColunmOrder] = useState('title')


    const handleOrder = (fieldName: SetStateAction<string>) => {
        setOrder(-order)
        setColunmOrder(fieldName)
    }

    chamadosFiltrados.sort((a, b) => {
        return a[colunmOrder] < b[colunmOrder] ? -order : order;
    })


    // RENDERIZAÇÃO DA PÁGINA
    return (
        <div>
            <NavbarMenu />
            <main>
                <TableTicket />
            </main>
        </div>
    );
}
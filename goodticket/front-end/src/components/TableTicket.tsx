import { SetStateAction, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URI } from "../enum/uri";
import axiosLogin from "../login/axiosLogin";

import { Button, Container, FormControl, InputGroup, Table } from "react-bootstrap";
import "../styles/tableTickets.scss";

import StatusTicketInProgress from '../assets/images/StatusEmAndamento.svg';
import StatusTicketOpen from '../assets/images/StatusAberto.svg';
import StatusTicketClose from '../assets/images/StatusFinalizado.svg';

import "../styles/global.scss";
import { BadgeHigh } from "./BadgeHigh";
import { BadgeLow } from "./BadgeLow";
import { BadgeMedium } from "./BadgeMedium";
import ControleSessao from "../login/ControleSessao";
import { FaSearch } from "react-icons/fa";
import Chamado from "../entidades/chamado";

export function TableTicket() {

  const navigate = useNavigate();
  const [chamadoId, setChamadoId] = useState('')
  const [chamados, setChamados] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [prioridade, setPrioridade] = useState("");
  const [equipamento, setEquipamento] = useState("");
  const [status, setStatus] = useState("");
  const [tickets, setTickets] = useState([]);
  const [priority, setPriority]: any = useState()

  useEffect(() => {
    const getAllTickets = async () => {
      const allTickets = await handleGetAll();
      if (allTickets) setChamados(allTickets);
    };
    getAllTickets();
  }, []);




  // PESQUISAR POR TITULO DO CHAMADO    
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


  const prioridadesIcones = (priority: string) => {
    if (priority == 'Alta') {
      return <BadgeHigh />
    } else if (priority == 'Media') {
      return <BadgeMedium />
    } else {
      return <BadgeLow />
    }
  }

  const statusIcones = (priority: string) => {
    if (priority == 'Aberto') {
      return <img src={StatusTicketOpen} alt="" />
    } else {
      return <img src={StatusTicketInProgress} alt="" />
    }
  }

  return (
    <>
      <main id="table-content">
        <Container>
          <h1>CHAMADOS EM ANDAMENTO</h1>
          <InputGroup className="m-auto input-content" size="lg">
            <FormControl
              placeholder="Procure pelo titulo do chamado"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="text"
              value={busca}
              onChange={(ev) => setBusca(ev.target.value)}
            />
            <Button variant="outline-secondary" id="button-addon2">
              <FaSearch />
            </Button>
          </InputGroup>
          <hr />
          <Table responsive="xl" size="xl" hover bordered className="tableChamados">
            <thead>
              <tr>
                <th><span id="prioridadeButton" onClick={e => handleOrder('prioridade')}>PRIORIDADE ⇵</span></th>
                <th><span onClick={e => handleOrder('titulo')}>TÍTULO ⇵</span></th>
                <th><span onClick={e => handleOrder('equipamento')}>EQUIPAMENTO ⇵</span></th>
                <th><span onClick={e => handleOrder('status')}>ANDAMENTO ⇵</span></th>
              </tr>
            </thead>
            <tbody>
              {chamadosFiltrados.map((chamado: any) => (
                <tr key={chamado["id"]} onClick={() => navigate('/page/teste', {state: {id: chamadoId}})}

                 onClickCapture={() => {setChamadoId(chamado["id"]); setPrioridade(chamado["prioridade"]); setTitulo(chamado["titulo"]);
                  setEquipamento(chamado["equipamento"]); setStatus(chamado["status"]); }}>

                  <td><span>{prioridadesIcones(chamado['prioridade'])}</span></td>
                  <td><span>{chamado["titulo"]}</span></td>
                  <td><span>{chamado["equipamento"]}</span></td>
                  <td><span>{statusIcones(chamado['status'])}</span></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </main>
    </>
  );
}
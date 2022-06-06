import { NavbarMenu } from '../../components/Navbar';
import { FaCalendar, FaClock, FaUser, FaUserShield } from 'react-icons/fa';
import { BadgeHigh } from '../../components/BadgeHigh';
import { BadgeLow } from '../../components/BadgeLow';

import '../../styles/global.scss';
import '../../styles/ticketLife.scss';
import { CommentsArea } from '../../components/CommentsArea';
import { useEffect, useState } from 'react';
import { TableTicket } from '../../components/TableTicket';
import {useLocation, useNavigate } from 'react-router-dom';
import ControleSessao from '../../login/ControleSessao';

export function TicketLife() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [autenticado, setAutenticado] = useState(true)
    const navigate = useNavigate()

    const { state } = useLocation()

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

    return(
        <div>
            <NavbarMenu/>
            <main id="main-content">
                <div className="content">
                    <div className="information-content">
                        <div className="info-ticket-all">
                            <div className='row-wreck'>
                            <div className="info-ticket">
                                <span>Data de abertura:</span>
                                <div className="info-ticket-icon">
                                    <FaCalendar />
                                    <span>12/05</span>
                                </div>
                            </div>
                            <div className="info-ticket">
                                <span>Hora de abertura:</span>
                                <div className="info-ticket-icon">
                                    <FaClock />
                                    <span>12/05</span>
                                </div>
                            </div>
                            </div>
                            
                            <div className='row-wreck'>
                                <div className="info-ticket">
                                    <span>Criado por:</span>
                                    <div className="info-ticket-icon">
                                        <FaUser />
                                        <span>Vinicius Buarque</span>
                                    </div>
                                </div>
                                <div className="info-ticket">
                                    <span>Analista responsável:</span>
                                    <div className="info-ticket-icon">
                                        <FaUserShield />
                                        <span>Fulano de tal</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        

                        <div className="info-input">
                            <div className="title-input">
                                <span>Titulo do chamado:</span>
                                <input placeholder={titulo} disabled/>
                            </div>

                            <div className="summary-input">
                                <span>Descrição do chamado:</span>
                                <textarea placeholder={descricao} disabled/>
                            </div>
                        </div>
                        
                        <div className="info-badges">
                            <div className="badge-high">
                                <span>Prioridade:</span>
                                <BadgeHigh />
                            </div>
                            <div className="badge-low">  
                                <span>Status:</span>
                                <BadgeLow />
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <CommentsArea />
            </main>
        </div>
    )
}
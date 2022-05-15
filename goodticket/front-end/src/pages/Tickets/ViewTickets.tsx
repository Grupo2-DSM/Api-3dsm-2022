import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import { Button } from '../../components/Button';

import '../../styles/viewTickets.scss';
import '../../styles/customStyleModal/viewTicketModal.scss'
import '../../styles/customStyleModal/globalAnimationModal.scss'
import '../../styles/global.scss';

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import axiosLogin from "../../login/axiosLogin";
import { URI } from "../../enum/uri";

export function ViewTickets(){
        const [open, setOpen] = useState(false);
        const onOpenModal = () => setOpen(true);
        const onCloseModal = () => setOpen(false);
        const navigate = useNavigate();
        const [chamados, setChamados] = useState([])
        const [titulo, setTitulo] = useState('')
        const [descricao, setDescricao] = useState('')
        const [prioridade, setPrioridade] = useState('')
        const [id, setId] = useState('')

        const handleGetAll = async () =>{
            const resposta =  await axiosLogin.get(URI.CHAMADOS)
            return resposta.data
        }

        useEffect(() => {
            const getAllTickets = async () => {
                const allTickets = await handleGetAll()
                if (allTickets) setChamados(allTickets)    
            }
            getAllTickets()
        }, [])

        return (
            <div>
               <Navbar />
                <Modal
                    open={open}
                    onClose={onCloseModal}
                    center
                    classNames={{
                    overlay: "customOverlay",
                    modal: "customModal",
                    overlayAnimationIn: 'customEnterOverlayAnimation',
                    overlayAnimationOut: 'customLeaveOverlayAnimation',
                    modalAnimationIn: 'customEnterModalAnimation',
                    modalAnimationOut: 'customLeaveModalAnimation',
                }}>
                    <div id="modal-content">
                        <div className="id-ticket">
                            <p>{id}</p>
                        </div>

                        <input type="text" placeholder={titulo} disabled />
                        <textarea name="" id="" placeholder={descricao} disabled />
                        <select name="" id="" disabled>
                            <option value="">{prioridade}</option>
                            <option value="">Baixa</option>
                        </select>

                        <div className="margin-left">
                            <Button onClick={() => navigate('/page/edit/ticket')}>Editar</Button>
                        </div>
                    </div>
                </Modal>
                <div id="view-ticket-content">
                    <main>
                        <div className="main-search-area">
                            <input type="text" placeholder="Procure pelo nome do chamado" />
                            <select>
                                <option selected>Selecione um filtro</option>
                                <option>Em andamento</option>
                                <option>Finalizado</option>
                            </select>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th><span>Id</span></th>
                                    <th><span>Titulo</span></th>
                                    <th><span>Equipamento</span></th>
                                    <th><span>Status</span></th>
                                </tr>
                            </thead>
                        
                            <tbody>
                                {chamados.map(chamado => (
                                    <tr key={chamado['id']} onClick={onOpenModal} onClickCapture={() => {setId(chamado['id']); setTitulo(chamado['titulo']); setDescricao(chamado['descricao']); setPrioridade(chamado['prioridade'])}}>
                                        <td><span>{chamado['id']}</span></td>
                                        <td><span>{chamado['titulo']}</span></td>
                                        <td><span>{chamado['equipamento']}</span></td>
                                        <td><span>{chamado['status']}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </main>
                </div>
            </div>
        );
    }

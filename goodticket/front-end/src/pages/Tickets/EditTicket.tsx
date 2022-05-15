import { useEffect, useState } from 'react';

import { Button } from '../../components/Button';
import { Navbar } from '../../components/Navbar';

import '../../styles/newTicket.scss';
import '../../styles/global.scss';
import axiosLogin from '../../login/axiosLogin';
import { URI } from '../../enum/uri';
import { useNavigate } from 'react-router-dom';
import Chamado from '../../entidades/chamado';

export function EditTicket(objeto: Chamado) {

    const [ticket, setTicket] = useState()
    const [id, setId] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [prioridade, setPrioridade] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        setErrMsg('')
    })

    const handleEdit = async (e:any) => {
        e.preventDefault()

        try{
            const resposta = await axiosLogin.put(URI.UPDATE_CHAMADOS,
                JSON.stringify({
                    id,
                    titulo,
                    descricao,
                    prioridade
                }), {
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
            if (resposta.status === 200){
                window.alert('Chamado de id: ' + id + ' atualizado.')
                navigate('/page/home')
            }
        } catch (err){
            setErrMsg('Ocorreu um erro (' + err + ')')
            window.alert(errMsg)
        }
    }

    return (
        <div>
            <Navbar />
            <div id="new-ticket-content">
                <main>
                    <div id="main-ticket-content">
                        <form onSubmit={handleEdit}>
                            <div className="form-group-textarea">
                                <input id='id' placeholder='Id do chamado' onChange={(e) => setId(e.target.value)}/>
                                <input id="titulo" type="text" placeholder='Título do chamado' onChange={(e) => setTitulo(e.target.value)}/>
                                <textarea id="descricao" placeholder='Descrição do chamado' onChange={(e) => setDescricao(e.target.value)}/>
                            </div>

                            <div id="select-options">
                                <select id="prioridade" onChange={(e) => setPrioridade(e.target.value)}>
                                    <option value="">Prioridade</option>
                                    <option value="Alta">Alta</option>
                                    <option value="Baixa">Baixa</option>
                                </select>
                                <Button type='submit' name='action'>Salvar chamado</Button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    )
}

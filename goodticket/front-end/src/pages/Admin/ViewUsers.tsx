import { URI } from '../../enum/uri';

import { Component, useEffect, useState } from 'react';
import { NavbarMenu } from "../../components/Navbar";
import Handlers from '../../login/Handlers';
import '../../styles/viewTickets.scss';
import '../../styles/global.scss';
import axiosLogin from '../../login/axiosLogin';
import ControleSessao from '../../login/ControleSessao';
import { useNavigate } from 'react-router-dom';


export function ViewUsers2(){
    const [usuarios, setUsuarios] = useState([])
    const navigate = useNavigate()
    const [autenticado, setAutenticado] = useState(true)

    useEffect(() => {
        checarAutenticacao()
    }, [])

    useEffect(() => {
        if (!autenticado){
            navigate('/')
        }
    }, [autenticado, navigate])

    const checarAutenticacao = async () => {
        const token = ControleSessao.getToken()
        if (token == null){
            setAutenticado(false)
        } else {
            setAutenticado(true)
        }
        return autenticado
    }

    let handlers = new Handlers();

    const handlerUsers = async () => {
        const resposta = await axiosLogin.get(URI.USUARIOS, {
            headers: {
                'Authorization' : 'Bearer ' + ControleSessao.getToken()
            }
        })
        const body = await resposta.data
        setUsuarios(body)
    }

    useEffect(() => {
        handlerUsers()
    })

    return (
        <div>
            <NavbarMenu />
            <div id="view-ticket-content">
                <main>
                    <div className="main-search-area">
                        <input type="text" placeholder="Procure pelo nome do usuário" />
                        <select>
                            <option selected>Selecione um filtro</option>
                            <option>Administrador</option>
                            <option>Suporte</option>
                            <option>Usuário comum</option>
                        </select>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th><span>Nome</span></th>
                                <th><span>Email</span></th>
                                <th><span>Cargo</span></th>
                                <th><span>Setor</span></th>
                            </tr>
                        </thead>
                        <tbody>
                        {usuarios.map(usuario => (
                                <tr key={usuario['id']}>
                                    <td><span>{usuario['nome']}</span></td>
                                    <td><span>{usuario['email']}</span></td>
                                    <td><span>{usuario['cargo']}</span></td>
                                    <td><span>{usuario['setor']}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    );
}


import { useEffect, useMemo, useState, SetStateAction } from 'react';
import { Container, FormControl, InputGroup, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import ControleSessao from '../login/ControleSessao';
import Handlers from '../login/Handlers';
import axiosLogin from '../login/axiosLogin';
import { URI } from '../enum/uri';
import '../styles/tableUser.scss';

export function TableUser({ list = [] }) {
    const [usuarios, setUsuarios] = useState([])
    const navigate = useNavigate()
    const [autenticado, setAutenticado] = useState(true)
    
    useEffect(() => {
        checarAutenticacao()
    }, [])

    useEffect(() => {
        if (!autenticado) {
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

    let handlers = new Handlers();

    const handlerUsers = async () => {
        const resposta = await axiosLogin.get(URI.USUARIOS, {
            headers: {
                'Authorization': 'Bearer ' + ControleSessao.getToken()
            }
        })
        const body = await resposta.data
        setUsuarios(body)
    }

    useEffect(() => {
        handlerUsers()
    })

    // BUSCAR USUARIOS POR NOME
    const [busca, setBusca] = useState('')

    const usuariosFiltrados = useMemo(() => {
        const lowerBusca = busca.toLowerCase()
        return usuarios.filter((usuario: any) =>
            usuario['nome'].toLowerCase().includes(lowerBusca))
    }, [busca, usuarios])

    // ORDENAR CHAMADOS POR TITULO
    const [order, setOrder] = useState(1)
    const [colunmOrder, setColunmOrder] = useState('title')

    const handleOrder = (fieldName: SetStateAction<string>) => {
        setOrder(-order)
        setColunmOrder(fieldName)
    }

    usuariosFiltrados.sort((a, b) => {
        return a[colunmOrder] < b[colunmOrder] ? -order : order;
    })

    return (
        <main id="table-content-user">
                <div className="main-search-area">
                    <InputGroup className="m-auto input-content" size="lg">
                        <FormControl
                            placeholder="Procure pelo nome do usuário"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            type="text"
                            value={busca}
                            onChange={(ev) => setBusca(ev.target.value)}
                        />
                    </InputGroup>
                </div>
                <Container>

                <hr />
                <Table responsive="xl" size="xl" hover bordered >
                    <thead>
                            <tr>
                                <th onClick={() => handleOrder('nome')}><span >Nome ⇵</span></th>
                                <th onClick={() => handleOrder('email')}><span>Email ⇵</span></th>
                                <th onClick={() => handleOrder('Cargo')}><span>Cargo ⇵</span></th>
                                <th onClick={() => handleOrder('Setor')}><span>Setor ⇵</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuariosFiltrados.map((usuario:any) => (
                                <tr key={usuario['id']}>
                                    <td><span>{usuario['nome']}</span></td>
                                    <td><span>{usuario['email']}</span></td>
                                    <td><span>{usuario['cargo']}</span></td>
                                    <td><span>{usuario['setor']}</span></td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </Container>
        </main>
    )
}
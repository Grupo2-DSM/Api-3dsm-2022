import { Component } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../../components/Table/styles";
import { URI } from "../../enum/uri";

export default class Tickets extends Component{

    state ={
        chamados: []
    }
    
    async componentDidMount(){
        const resposta = await fetch(URI.CHAMADOS)
        const body = await resposta.json()
        this.setState({chamados:body})
    }

    render(){
        const {chamados} = this.state
        return(
            <>
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Titulo</TableCell>
                    <TableCell>Equipamento</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {chamados.map(chamado =>
                <TableRow key={chamado['id']}>
                    <TableCell>{chamado['id']}</TableCell>
                    <TableCell>{chamado['titulo']}</TableCell>
                    <TableCell>{chamado['equipamento']}</TableCell>
                    <TableCell>{chamado['status']}</TableCell>
                </TableRow>)}
            </TableBody>
            </Table>
            
            
            </>
        )
    }
}
import {Table, TableHead, TableRow, TableCell, TableBody} from "./styles"

export default function Tables(){
    return (
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
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Tela azul</TableCell>
                        <TableCell>Notebook Dell</TableCell>
                        <TableCell>Em processo</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>Monitor quebrado</TableCell>
                        <TableCell>Computador desktop</TableCell>
                        <TableCell>Resolvido</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>Maçaneta da porta quebrada</TableCell>
                        <TableCell>Porta</TableCell>
                        <TableCell>Resolvido</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>                
            </Table>
        </>
    );
}
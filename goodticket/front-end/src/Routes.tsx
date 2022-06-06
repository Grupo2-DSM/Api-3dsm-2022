import { Routes, Route } from 'react-router-dom';

/*importações de uso comum*/
import { Login } from './pages/Login/Login';
import { Password } from './pages/Login/Password';
import { NewPassword } from './pages/Login/NewPassword';
import { Profile } from './pages/Profiles/Profile';

/*importações de uso do usuário*/
import { HomeUsuario } from './pages/Profiles/Usuario/HomeUsuario';
import { NewTicket } from './pages/Tickets/NewTicket';
import { SolutionsTickets } from './pages/Tickets/SolutionsTickets';
import { ViewTickets } from './pages/Tickets/ViewTickets';

/*importações de uso do administrador*/
import { HomeAdmin } from './pages/Profiles/Admin/HomeAdmin';
import { AnaliseDados } from './pages/Powerbi/AnaliseDados';
import { UserRegister } from './pages/Register/Register';
import { ViewUsers } from './pages/Profiles/Admin/ViewUsers';

/*importações de uso do suporte*/
import { HomeSuporte } from './pages/Profiles/Suporte/HomeSuporte';
import { EditTicket } from './pages/Tickets/EditTicket';

/*importações de teste*/
import { TicketLife } from './pages/Tickets/TicketLife';

export function PathRoutes() {
    return (
        <Routes>
            {/*páginas de uso comum*/}
            <Route path="/" element={<Login />} />
            <Route path="/page/password/new" element={<Password />} />
            <Route path="/page/password/new/change" element={<NewPassword />} />
            <Route path="/page/tickets/view" element={<ViewTickets />} />
            <Route path="/page/profile" element={<Profile />} />

            {/*páginas de uso do usuario*/}
            <Route path="/page/usuario/home" element={<HomeUsuario />} />
            <Route path="/page/tickets/new" element={<NewTicket />} />
            <Route path="/page/tickets/solutions" element={<SolutionsTickets />} />

            {/*páginas de uso do administrador*/}
            <Route path="/page/admin/home" element={<HomeAdmin />} />
            <Route path="/page/admin/analisedados" element={<AnaliseDados />} />
            <Route path="/page/admin/view/usuarios" element={<ViewUsers />} />
            <Route path="/page/register" element={<UserRegister />} />

            {/*páginas de uso do suporte*/}
            <Route path="/page/suporte/home" element={<HomeSuporte />} />
            <Route path="/page/edit/ticket" element={<EditTicket id={''} titulo={''} descricao={''} local={''} tipo={''} equipamento={''} descri_equipamento={''} num_maquina={0} sala={0} prioridade={''} />} />

            {/*páginas em teste*/}
            <Route path="/page/teste" element={<TicketLife />} />

        </Routes>
    )
};

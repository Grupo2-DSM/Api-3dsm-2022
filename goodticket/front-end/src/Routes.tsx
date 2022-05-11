import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { NewPassword } from './pages/Login/NewPassword';
import { NewTicket } from './pages/Tickets/NewTicket';
import { Password } from './pages/Login/Password';
import { Register } from './pages/Register/Register';
import { ViewTickets } from './pages/Tickets/ViewTickets';
import { ViewUsers } from './pages/Admin/ViewUsers';
import { EditTicket } from './pages/Tickets/EditTicket';


export function PathRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/page/password/new" element={<Password />} />
            <Route path="/page/password/new/change" element={<NewPassword />} />
            <Route path="/page/home" element={<Home />} />
            <Route path="/page/tickets/new" element={<NewTicket />} />
            <Route path="/page/tickets/view" element={<ViewTickets />} />
            <Route path="/page/admin/users/view" element={<ViewUsers />} />
            <Route path="/page/edit/ticket" element={<EditTicket />} />
            <Route path="/page/register" element={<Register />} />
        </Routes>
    )
};
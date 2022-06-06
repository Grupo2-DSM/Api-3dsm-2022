import { URI } from '../../../enum/uri';
import { Link, useNavigate } from 'react-router-dom';
import { Component, SetStateAction, useEffect, useMemo, useState } from 'react';
import { NavbarMenu } from "../../../components/Navbar";

import Handlers from '../../../login/Handlers';
import axiosLogin from '../../../login/axiosLogin';


import '../../../styles/viewTickets.scss';
import '../../../styles/global.scss';
import { Button } from '../../../components/Button';
import { TableUser } from '../../../components/TableUser';

export function ViewUsers() {
    return (
        <div>
            <NavbarMenu />
            <div id="view-ticket-content">
                <TableUser />
                <main>
                    <p id="linkticket">Caso não encontreo usuário desejado, crie um<Link to={"/page/register"}>aqui!</Link></p>
                </main>
            </div>
        </div>
    );
}


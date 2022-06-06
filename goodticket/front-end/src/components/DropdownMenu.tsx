import { FaAngleDown, FaUser, FaDoorOpen } from "react-icons/fa";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "../styles/dropdownMenu.scss";
import ControleSessao from "../login/ControleSessao";

export function DropdownMenu() {
  const navigate = useNavigate();

  const handlerLogout = async (e: any) => {
    e.preventDefault()

    try {
      ControleSessao.removeToken()
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <div id="content">
        <span>Bem vindo, {ControleSessao.getUserName()}</span>
      </div>
    </div>
  );
}

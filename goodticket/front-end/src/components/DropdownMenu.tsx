import { FaAngleDown, FaUser, FaDoorOpen } from "react-icons/fa";
import { useState } from "react";
/* import { useNavigate } from "react-router-dom"; */

import 'react-responsive-modal/styles.css';
import { Modal } from "react-responsive-modal";

import { useNavigate } from "react-router-dom";

import "../styles/dropdownMenu.scss";
import '../styles/customStyleModal/dropdownModal.scss';
import '../styles/customStyleModal/globalAnimationModal.scss';
import { Button } from "./Button";

export function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
/*   const navigate = useNavigate(); */
  const navigate = useNavigate();
  return (
    <div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: "customOverlayDrop",
          modal: "customModal",
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
      >
        <div id="modal-content">
          <Button>
            <FaUser />
            <span>
              Perfil
            </span>
          </Button>
          <Button onClick={() => navigate('/')}>
            <FaDoorOpen />
            <span >
                Sair 
            </span>
          </Button>
        </div>
      </Modal>
      <div id="content">
        <span>Bem vindo, Fulano</span>
        <button onClick={onOpenModal}>
          <FaAngleDown size={25} color="#fefefe" />
        </button>
      </div>
    </div>
  );
}

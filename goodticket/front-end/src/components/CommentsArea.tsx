import '../styles/commentsArea.scss';
import { FaAngleRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleSessao from '../login/ControleSessao';
import Handlers from '../login/Handlers';

export function CommentsArea() {
    const [body, setBody] = useState('')
    const [chamadoId, setChamadoId] = useState('')

    let comentario = {
        body: body,
        chamadoId: chamadoId,
        email: ControleSessao.getUserEmail()
    }

    const handler = new Handlers()

    return(
        <div className='comments-area'>
            <div className='comments-area-input'>
               <input placeholder='Digite seu comentário aqui...' onChange={(e) => setBody(e.target.value)}/>
            </div>
            <div className='comments-area-button'>
                <button onClick={(e) => handler.handleNewComment(comentario)}>
                    <FaAngleRight/>
                </button>
            </div>
        </div>  
    )
}
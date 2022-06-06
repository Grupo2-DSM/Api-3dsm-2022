import { FaUser } from "react-icons/fa";
import '../styles/Message.scss';

export function MessageUser() {
    return (
        <div className='message-comment'>
            <div className='message-comment-header'>
                <FaUser />
            </div>
            <div className='message-comment-body'>
                <p></p>
            </div>
        </div>        
    );
}
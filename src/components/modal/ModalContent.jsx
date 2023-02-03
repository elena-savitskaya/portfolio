import "./_modal.scss";
import { FaTelegram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const ModalContent = ({ active, setActive }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()} >
                <div className="modal-links">
                    <a href="https://t.me/helena_savitskaya"><FaTelegram /></a>
                    <a href="tel:+380504776347"><FaPhoneAlt /></a>
                    <a href="mailto:helena0518savitskaya@gmail.com"><FaRegEnvelope /></a>
                </div>
            </div>
        </div>
    );
}

export { ModalContent };
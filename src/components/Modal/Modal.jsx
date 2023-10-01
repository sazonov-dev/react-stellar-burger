import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import styles from './Modal.module.css';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";

const Modal = ({children, open, closeModal}) => {

    const keyDown = (event) => {
        if (event.key === 'Escape') {
            closeModal(null, false);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyDown);

        return () => {
            document.removeEventListener('keydown', keyDown);
        }
    }, []);

    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className={styles.modal}>
                {children}
            </div>
            <ModalOverlay closeModal={closeModal}/>
        </>,
        document.getElementById('portal')
    )
};

Modal.propTypes = {
    component: PropTypes.element,
    open: PropTypes.bool
}


export default Modal;

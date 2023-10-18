import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import styles from './Modal.module.css';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";
import CloseButton from "../CloseButton/CloseButton";

const Modal = ({children, closeModal}) => {

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

    return ReactDOM.createPortal(
        <>
            <div className={styles.modal}>
                <CloseButton style={{position: 'absolute', top: '60px', right: '40px'}} closeModal={closeModal}/>
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

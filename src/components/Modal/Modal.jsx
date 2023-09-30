import React from 'react';
import ReactDOM from "react-dom";
import styles from './Modal.module.css';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";

const Modal = ({component, open, closeModal}) => {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className={styles.modal}>
                {component}
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

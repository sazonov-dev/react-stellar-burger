import React from 'react';
import styles from './ModalOverlay.module.css';
const ModalOverlay = ({closeModal}) => {
    return (
        <div className={styles.modal_overlay} onClick={() => closeModal(null, false)}></div>
    )
};

export default ModalOverlay;

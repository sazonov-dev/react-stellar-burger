import React from 'react';
import styles from './CloseButton.module.css';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const CloseButton = ({closeModal, style}) => {
    return (
        <button className={styles.close} style={style} onClick={() => closeModal(null, false)}>
            <CloseIcon type="primary" />
        </button>
    );
};

CloseButton.propTypes = {
    closeModal: PropTypes.func,
    style: PropTypes.object
}

export default CloseButton;

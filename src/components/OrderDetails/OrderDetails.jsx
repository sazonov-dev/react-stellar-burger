import React from 'react';
import styles from './OrderDetails.module.css';
import doneIcon from '../../assets/images/done.png';
import CloseButton from "../CloseButton/CloseButton";
import PropTypes from "prop-types";

const OrderDetails = ({closeModal}) => {
    return (
        <div className={`${styles.order} pt-30 pb-30`}>
            <CloseButton style={{position: 'absolute', top: '60px', right: '40px'}} closeModal={closeModal}/>
            <h2 className={`${styles.id} text text_type_digits-large pb-8`}>034536</h2>
            <p className={`text text_type_main-medium pb-15`}>идентификатор заказа</p>
            <img className={`pb-15`} src={doneIcon} alt="Иконка готовности заказа"/>
            <p className={`text text_type_main-default pb-2`}>Ваш заказ начали готовить</p>
            <p className={`text text_type_main-default text_color_inactive pb-2`}>Дождитесь готовности на орбитальной станции</p>
        </div>
    );
};

OrderDetails.propTypes = {
    closeModal: PropTypes.func,
}

export default OrderDetails;

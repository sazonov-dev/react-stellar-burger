import React from 'react';
import styles from './IngredientItem.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

const IngredientItem = ({image, name, price, count, openModal, item, closeModal}) => {
    return (
        <div className={`${styles.ingredient} pl-4 pr-4`} onClick={() => openModal(<IngredientDetails closeModal={closeModal} item={item}/>, true)}>
            <img className={styles.ingredient__img} src={image} alt={name}/>
            <div className={styles.ingredient__price}>
                <p className="text text_type_digits-default">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">{name}</p>
            <Counter count={count ? count : 0} size="default" extraClass="m-1" />
        </div>
    );
};

IngredientItem.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    count: PropTypes.number,
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
    item: PropTypes.object
}

export default IngredientItem;

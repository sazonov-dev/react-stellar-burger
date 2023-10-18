import React, {useContext} from 'react';
import styles from './IngredientItem.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {BasketContext} from "../../services/BasketContext";

const IngredientItem = ({ count, openModal, item, closeModal}) => {
    const {basketData, setBasketData} = useContext(BasketContext);
    const {totalPriceState, totalPriceDispatcher} = useContext(BasketContext);
    const addPriceToBasket = (price) => {
        totalPriceDispatcher({type:"set", payload: totalPriceState.totalPrice + price})
    }
    const addItemToBasket = (item) => {
        if (item.type !== "bun") {
            addPriceToBasket(item.price)
            openModal(<IngredientDetails closeModal={closeModal} item={item}/>, true)
            return setBasketData({...basketData, basket: [...basketData.basket, item], itemsId: [...basketData.itemsId, item._id]});
        }

        if (item.type === 'bun' && basketData.bunCount === 0) {
            addPriceToBasket(item.price)
            openModal(<IngredientDetails closeModal={closeModal} item={item}/>, true)
            return setBasketData({...basketData, basket: [...basketData.basket, item], bunCount: basketData.bunCount + 1, bunId: item._id, itemsId: [...basketData.itemsId, item._id]});
        }

        if (item.type === 'bun' && basketData.bunId !== null && item._id === basketData.bunId && basketData.bunCount !== 2) {
            addPriceToBasket(item.price)
            openModal(<IngredientDetails closeModal={closeModal} item={item}/>, true)
            return setBasketData({...basketData, basket: [...basketData.basket, item], bunCount: basketData.bunCount + 1, itemsId: [...basketData.itemsId, item._id]});
        }

        return null;
    }

    return (
        // <div className={`${styles.ingredient} pl-4 pr-4`} onClick={() => openModal(<IngredientDetails closeModal={closeModal} item={item}/>, true)}>
        <div className={`${styles.ingredient} pl-4 pr-4`} onClick={() => addItemToBasket(item)}>
            <img className={styles.ingredient__img} src={item.image} alt={item.name}/>
            <div className={styles.ingredient__price}>
                <p className="text text_type_digits-default">{item.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">{item.name}</p>
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

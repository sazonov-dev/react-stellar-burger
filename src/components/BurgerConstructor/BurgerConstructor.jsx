import React, {useMemo, useContext} from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.css';
import ConstructorPrice from "../ConstructorPrice/ConstructorPrice";
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorElementMiddle from "../ConstructorElementMiddle/ConstructorElementMiddle";
import {BasketContext} from "../../services/BasketContext";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

const BurgerConstructor = ({openModal, closeModal}) => {
    const {basketData} = useContext(BasketContext);
    const {totalPriceState} = useContext(BasketContext);

    const preparedDataToRender = (data) => {
        let bunDirection = false;

        const newData = {
            top: [],
            middle: [],
            bottom: []
        }

        data.forEach((item) => {
            if (item.type === 'bun' && bunDirection === false) {
                bunDirection = true;
                return newData.top.push(<ConstructorElement
                    key={item._id}
                    type="top"
                    isLocked={true}
                    text={item.name + ' (верх)'}
                    price={item.price}
                    thumbnail={item.image}
                    onClick={() => openModal(<IngredientDetails closeModal={closeModal} item={item}/>, true)}
                />)
            }

            if (item.type === 'bun' && bunDirection === true) {
                bunDirection = false;
                return newData.bottom.push(<ConstructorElement
                    key={item._id}
                    type="bottom"
                    isLocked={true}
                    text={item.name + ' (низ)'}
                    price={item.price}
                    thumbnail={item.image}
                    onClick={() => openModal(<IngredientDetails closeModal={closeModal} item={item}/>, true)}
                />)
            }

            return newData.middle.push(
                <ConstructorElementMiddle key={item._id} onClick={() => openModal(<IngredientDetails closeModal={closeModal} item={item}/>, true)}>
                    <ConstructorElement
                        text={item.name}
                        price={item.price}
                        thumbnail={item.image}
                    />
                </ConstructorElementMiddle>
            )
        })

        return newData;
    }

    const preparedComponents = useMemo(() => {
        return preparedDataToRender(basketData.basket);
    },[basketData])

    if (!preparedComponents) {
        return (
            <div>Загрузка...</div>
        )
    } else {
        const topElements = preparedComponents.top.map((item) => {
            return item
        })
        const middleElements = preparedComponents.middle.map((item) => {
            return item
        })
        const bottomElements = preparedComponents.bottom.map((item) => {
            return item
        })

        return (
            <section className={`${styles.constructor} pt-25`}>
                <div className={styles.constructor__container}>
                    {
                        topElements
                    }
                    {
                        middleElements
                    }
                    {
                        bottomElements
                    }
                </div>
                <ConstructorPrice price={totalPriceState.totalPrice} openModal={openModal} closeModal={closeModal}/>
            </section>
        );
    }
};


BurgerConstructor.propTypes = {
    openModal: PropTypes.func,
    closeModal: PropTypes.func
};
export default BurgerConstructor;

import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.css';
import ConstructorPrice from "../ConstructorPrice/ConstructorPrice";
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorElementMiddle from "../ConstructorElementMiddle/ConstructorElementMiddle";

const BurgerConstructor = ({data, openModal, closeModal}) => {
    const [preparedData, setPreparedData] = useState(null)

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
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                />)
            }

            if (item.type === 'bun' && bunDirection === true) {
                bunDirection = false;
                return newData.bottom.push(<ConstructorElement
                    key={item._id}
                    type="bottom"
                    isLocked={true}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                />)
            }

            return newData.middle.push(
                <ConstructorElementMiddle key={item._id}>
                    <ConstructorElement
                        key={item._id}
                        text={item.name}
                        price={item.price}
                        thumbnail={item.image}
                    />
                </ConstructorElementMiddle>
            )
        })

        return newData;
    }

    useEffect(() => {
        const newData = preparedDataToRender(data)
        setPreparedData(newData)
    }, []);

    if (preparedData === null) {
        return (
            <div>Загрузка...</div>
        )
    } else {
        const topElements = preparedData.top.map((item) => {
            return item
        })
        const middleElements = preparedData.middle.map((item) => {
            return item
        })
        const bottomElements = preparedData.bottom.map((item) => {
            return item
        })

        return (
            <section className={`${styles.constructor} pt-25`}>
                <div className={styles.constructor__container}>
                    {
                        topElements.map((item) => item)
                    }
                    {
                        middleElements.map((item) => item)
                    }
                    {
                        bottomElements.map((item) => item)
                    }
                </div>
                <ConstructorPrice price={100} openModal={openModal} closeModal={closeModal}/>
            </section>
        );
    }
};


BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
        calories: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string,
        __v: PropTypes.number
    })),
    openModal: PropTypes.func,
    closeModal: PropTypes.func
};
export default BurgerConstructor;

import React, {useEffect, useState, useMemo} from 'react';
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
        return preparedDataToRender(data);
    },[])

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

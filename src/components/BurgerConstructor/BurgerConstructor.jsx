import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.css';
import ConstructorPrice from "../ConstructorPrice/ConstructorPrice";
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import image from '../../assets/images/ingridient-item-01.png';
import ConstructorElementMiddle from "../ConstructorElementMiddle/ConstructorElementMiddle";

const BurgerConstructor = (props) => {
    return (
        <section className={`${styles.constructor} pt-25`}>
            <div className={styles.constructor__container}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={image}
                />
                <ConstructorElementMiddle>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={image}
                    />
                </ConstructorElementMiddle>
                <ConstructorElementMiddle>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={image}
                    />
                </ConstructorElementMiddle>
                <ConstructorElementMiddle>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={image}
                    />
                </ConstructorElementMiddle>
                <ConstructorElementMiddle>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={image}
                    />
                </ConstructorElementMiddle>
                <ConstructorElementMiddle>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={image}
                    />
                </ConstructorElementMiddle>
                <ConstructorElementMiddle>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={image}
                    />
                </ConstructorElementMiddle>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={image}
                />
            </div>
            <ConstructorPrice price={100}/>
        </section>
    );
};


BurgerConstructor.propTypes = {
    data: PropTypes.array,
};
export default BurgerConstructor;

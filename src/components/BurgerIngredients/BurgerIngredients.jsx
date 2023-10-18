import React, {useContext} from 'react';
import styles from './BurgerIngredients.module.css';
import Tabs from '../Tabs/Tabs';
import IngredientItem from "../IngredientItem/IngredientItem";
import PropTypes from "prop-types";
import {appDataContext} from "../../services/appDataContext";

const BurgerIngredients = ({openModal, closeModal}) => {
    const {pageData} = useContext(appDataContext);
    return (
        <section className={styles.burgerIngredient}>
            <h2 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h2>
            <Tabs/>
            <div className={`${styles.ingredients} pb-6`}>
                <h3 className="text text_type_main-medium pb-6">Булки</h3>
                <div className={`${styles.ingredients__container} pb-10`}>
                    {pageData.data.map((item) => {
                        if (item.type === 'bun') {
                            return <IngredientItem key={item._id} image={item.image} price={item.price} name={item.name} count={1} item={item} openModal={openModal} closeModal={closeModal}/>
                        }
                        return null;
                    })}
                </div>
                <h3 className="text text_type_main-medium pb-6">Соусы</h3>
                <div className={`${styles.ingredients__container} pb-10`}>
                    {pageData.data.map((item) => {
                        if (item.type === 'sauce') {
                            return <IngredientItem key={item._id} image={item.image} price={item.price} name={item.name} count={1} item={item} openModal={openModal} closeModal={closeModal}/>
                        }
                        return null;
                    })}
                </div>
                <h3 className="text text_type_main-medium pb-6">Начинки</h3>
                <div className={`${styles.ingredients__container} pb-10`}>
                    {pageData.data.map((item) => {
                        if (item.type === 'main') {
                            return <IngredientItem key={item._id} image={item.image} price={item.price} name={item.name} count={1} item={item} openModal={openModal} closeModal={closeModal}/>
                        }
                        return null;
                    })}
                </div>
            </div>
        </section>
    );
};

BurgerIngredients.propTypes = {
    openModal: PropTypes.func,
    closeModal: PropTypes.func
};

export default BurgerIngredients;

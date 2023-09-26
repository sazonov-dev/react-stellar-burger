import React from 'react';
import styles from './BurgerIngredients.module.css';
import Tabs from '../Tabs/Tabs';
import IngredientItem from "../IngredientItem/IngredientItem";
import ingredientImage from '../../assets/images/ingridient-item-01.png';
import PropTypes from "prop-types";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

const BurgerIngredients = (props) => {
    return (
        <section className={styles.burgerIngredient}>
            <h2 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h2>
            <Tabs/>
            <div className={`${styles.ingredients} pb-6`}>
                <h3 className="text text_type_main-medium pb-6">Булки</h3>
                <div className={`${styles.ingredients__container} pb-10`}>
                    <IngredientItem image={ingredientImage} price="20" name="Краторная булка N-200i" count={1}/>
                    <IngredientItem image={ingredientImage} price="20" name="Краторная булка N-200i"/>
                    <IngredientItem image={ingredientImage} price="20" name="Краторная булка N-200i"/>
                    <IngredientItem image={ingredientImage} price="20" name="Краторная булка N-200i"/>
                </div>
                <h3 className="text text_type_main-medium pb-6">Соусы</h3>
                <div className={`${styles.ingredients__container} pb-10`}>
                    <IngredientItem image={ingredientImage} price="20" name="Краторная булка N-200i"/>
                    <IngredientItem image={ingredientImage} price="20" name="Краторная булка N-200i"/>
                    <IngredientItem image={ingredientImage} price="20" name="Краторная булка N-200i"/>
                    <IngredientItem image={ingredientImage} price="20" name="Краторная булка N-200i"/>
                </div>
                <h3 className="text text_type_main-medium pb-6">Начинки</h3>
                <div className={`${styles.ingredients__container} pb-10`}>
                    <IngredientItem image={ingredientImage} price="20" name="Краторная булка N-200i"/>
                    <IngredientItem image={ingredientImage} price="20" name="Краторная булка N-200i"/>
                    <IngredientItem image={ingredientImage} price="20" name="Краторная булка N-200i"/>
                    <IngredientItem image={ingredientImage} price="20" name="Краторная булка N-200i"/>
                </div>
            </div>
        </section>
    );
};

BurgerIngredients.propTypes = {
    data: PropTypes.array,
};

export default BurgerIngredients;

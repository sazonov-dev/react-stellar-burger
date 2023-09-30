import React from 'react';
import styles from './IngredientDetails.module.css';
import CloseButton from "../CloseButton/CloseButton";
import PropTypes from "prop-types";

const IngredientDetails = ({item, closeModal}) => {
    return (
        <div className={`pt-10 pb-15`}>
            <div className={`${styles.header} pl-10 pr-10`}>
                <h2 className={`text text_type_main-large`}>Детали ингредиента</h2>
                <CloseButton closeModal={closeModal}/>
            </div>
            <div className={styles.container}>
                <img className={`pb-4`} src={item.image_large} alt="Изображение ингредиента"/>
                <p className={`pb-8 text text_type_main-medium`}>{item.name}</p>
                <div className={styles.content}>
                    <div className={styles.content_card}>
                        <p className={`text text_type_main-default text_color_inactive`}>Калории,ккал</p>
                        <p className={`text text_type_main-default text_color_inactive`}>{item.calories}</p>
                    </div>
                    <div className={styles.content_card}>
                        <p className={`text text_type_main-default text_color_inactive`}>Белки, г</p>
                        <p className={`text text_type_main-default text_color_inactive`}>{item.proteins}</p>
                    </div>
                    <div className={styles.content_card}>
                        <p className={`text text_type_main-default text_color_inactive`}>Жиры, г</p>
                        <p className={`text text_type_main-default text_color_inactive`}>{item.fat}</p>
                    </div>
                    <div className={styles.content_card}>
                        <p className={`text text_type_main-default text_color_inactive`}>Углеводы, г</p>
                        <p className={`text text_type_main-default text_color_inactive`}>{item.carbohydrates}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

IngredientDetails.propTypes = {
    closeModal: PropTypes.func,
    item: PropTypes.object
}


export default IngredientDetails;

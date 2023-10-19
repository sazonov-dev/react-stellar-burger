import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {useEffect, useState} from "react";
import {BASE_URL} from '../../utils/api';
import Modal from "../Modal/Modal";
import React, {useReducer} from 'react'
import {AppDataContext} from "../../services/AppDataContext";
import {BasketContext} from "../../services/BasketContext";
import {initialState, reducer} from "../../utils/totalPriceReducer";
import {request} from "../../utils/request";

function App() {
    const [pageData, setPageData] = useState({isLoading: false, hasError: false, data: []});
    const [basketData, setBasketData] = useState({basket: [], bunId: null, bunCount: 0, itemsId: [], orderId: 0})
    const [isOpen, setIsOpen] = useState(false);
    const [modalComponent, setModalComponent] = useState(null);
    const [totalPriceState, totalPriceDispatcher] = useReducer(reducer, initialState, undefined);

    const openModal = (component, state) => {
        setModalComponent(component);
        setIsOpen(state);
    }

    const closeModal = (component, state) => {
        setModalComponent(component);
        setIsOpen(state);
    }

    useEffect(() => {
        setPageData({...pageData, isLoading: true, hasError: false});
        request(BASE_URL + 'ingredients', {method: 'GET'})
            .then((data) => {
                setPageData((prevState) => ({
                    ...prevState,
                    isLoading: false,
                    hasError: false,
                    data: data.data,
                }));
            })
            .catch((error) => {
                console.error(error.message);
            })
    }, []);

  return (
    <div className={styles.app}>
        <AppDataContext.Provider value={{pageData, setPageData}}>
            <BasketContext.Provider value={{basketData, setBasketData, totalPriceDispatcher, totalPriceState}}>
                {
                    pageData.isLoading === false && pageData.data.length > 0
                        ?
                            <>
                                <AppHeader/>
                                <main className={styles.main}>
                                    <BurgerIngredients openModal={openModal} closeModal={closeModal}/>
                                    <BurgerConstructor openModal={openModal} closeModal={closeModal}/>
                                </main>
                                {isOpen && (
                                    <Modal closeModal={closeModal}>
                                        {modalComponent}
                                    </Modal>
                                )}
                            </>
                        :
                        pageData.hasError
                            ? <div className={`${styles.error} text text_type_main-large`}>Произошла ошибка, перезагрузите страницу</div>
                            : <div className={`${styles.error} text text_type_main-large`}>Идет загрузка...</div>
                }
            </BasketContext.Provider>
        </AppDataContext.Provider>
    </div>
  );
}

export default App;

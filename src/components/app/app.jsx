import styles from "./app.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {useEffect, useState} from "react";
import {apiUrl} from '../../utils/api';
import Modal from "../Modal/Modal";
import React, {useReducer} from 'react'
import {appDataContext} from "../../services/appDataContext";
import {basketContext} from "../../services/basketContext";
import {initialState, reducer} from "../../utils/totalPriceReducer";


function App() {
    const [pageData, setPageData] = useState({isLoading: false, hasError: false, data: []});
    const [basketData, setBasketData] = useState({basket: [], itemsId: [], orderId: 0})
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
        fetch(apiUrl)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Ошибка сети или сервера');
                }
            })
            .then((data) => {
                setPageData((prevState) => ({
                    ...prevState,
                    isLoading: false,
                    hasError: false,
                    data: data.data,
                }));
            })
            .catch((error) => {
                setPageData((prevState) => ({
                    ...prevState,
                    isLoading: false,
                    hasError: true
                }));
            })
    }, []);

  return (
    <div className={styles.app}>
        <appDataContext.Provider value={{pageData, setPageData}}>
            <basketContext.Provider value={{basketData, setBasketData, totalPriceDispatcher, totalPriceState}}>
                {
                    pageData.isLoading === false && pageData.data.length > 0
                        ?
                            <>
                                <AppHeader/>
                                <main className={styles.main}>
                                    <BurgerIngredients openModal={openModal} closeModal={closeModal}/>
                                    <BurgerConstructor openModal={openModal} closeModal={closeModal}/>
                                </main>
                                <Modal open={isOpen} closeModal={closeModal}>
                                    {modalComponent}
                                </Modal>
                            </>
                        :
                        pageData.hasError
                            ? <div className={`${styles.error} text text_type_main-large`}>Произошла ошибка, перезагрузите страницу</div>
                            : <div className={`${styles.error} text text_type_main-large`}>Идет загрузка...</div>
                }
            </basketContext.Provider>
        </appDataContext.Provider>
    </div>
  );
}

export default App;

import styles from "./app.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {useEffect, useState} from "react";
import {apiUrl} from '../../utils/api';
import Modal from "../Modal/Modal";


function App() {
    const [state, setState] = useState({isLoading: false, hasError: false, data: []});
    const [isOpen, setIsOpen] = useState(false);
    const [modalComponent, setModalComponent] = useState(null);

    const openModal = (component, state) => {
        setModalComponent(component);
        setIsOpen(state);
    }

    const closeModal = (component, state) => {
        setModalComponent(component);
        setIsOpen(state);
    }

    useEffect(() => {
        setState({...state, isLoading: true, hasError: false});
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setState((prevState) => ({
                    ...prevState,
                    isLoading: false,
                    hasError: false,
                    data: data.data,
                }));
            })
            .catch((error) => {
                setState((prevState) => ({
                    ...prevState,
                    isLoading: false,
                    hasError: true
                }));
            })

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeModal(null, false);
            }
        })
    }, []);

  return (
    <div className={styles.app}>
        {
            state.isLoading === false && state.data.length > 0
                ?
                    <>
                        <AppHeader/>
                        <main className={styles.main}>
                            <BurgerIngredients data={state.data} openModal={openModal} closeModal={closeModal}/>
                            <BurgerConstructor data={state.data} openModal={openModal} closeModal={closeModal}/>
                        </main>
                        <Modal open={isOpen} component={modalComponent} closeModal={closeModal}>
                        </Modal>
                    </>
                :
                state.hasError
                    ? <div className={`${styles.error} text text_type_main-large`}>Произошла ошибка, перезагрузите страницу</div>
                    : <div className={`${styles.error} text text_type_main-large`}>Идет загрузка...</div>
        }
    </div>
  );
}

export default App;

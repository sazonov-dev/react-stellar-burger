import React from 'react';
import styles from './AppHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import NavButton from "../NavButton/NavButton";


const AppHeader = () => {
    const [current, setCurrent] = React.useState('one');

    return (
        <header className={styles.header}>
            <div className={`${styles.header__container} pt-4 pb-4`}>
                <nav className={styles.header__nav}>
                    <NavButton value="one" icon={<BurgerIcon type={current === "one" ? "primary" : "secondary"} />} text="Конструктор" textType="text_color_active"/>
                    <NavButton value="two" icon={<ListIcon type={current === "two" ? "primary" : "secondary"} />} text="Лента заказов"/>
                </nav>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <NavButton value="three" icon={<ProfileIcon type={current === "three" ? "primary" : "secondary"} />} text="Личный кабинет"/>
            </div>
        </header>
    );
};

export default AppHeader;

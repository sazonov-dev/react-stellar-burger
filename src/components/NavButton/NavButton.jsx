import React from 'react';
import styles from './NavButton.module.css'

const NavButton = (props) => {
    return (
        <a href="#" className={styles.button}>
            {props.icon}
            <p className={`text text_type_main-default ${props.textType === 'text_color_active' ? props.textType : 'text_color_inactive'}`}>{props.text}</p>
        </a>
    );
};

export default NavButton;

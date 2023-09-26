import React from 'react';
import styles from './NavButton.module.css'

const NavButton = (props) => {
    return (
        <button className={styles.button}>
            {props.icon}
            <p className={`text text_type_main-default ${props.textType === 'text_color_active' ? props.textType : 'text_color_inactive'}`}>{props.text}</p>
        </button>
    );
};

export default NavButton;

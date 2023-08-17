import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Header.module.css'
const Header = () => {
    return (

        <div className={css.Header}>
            <NavLink to={'albums'}>albums </NavLink>
            <NavLink to={'comments'}> comments </NavLink>
            <NavLink to={'users'}>users</NavLink>
        </div>
    );
};

export {Header};
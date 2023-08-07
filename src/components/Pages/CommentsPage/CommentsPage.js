import React from 'react';
import {Outlet} from "react-router-dom";
import {Comments} from "../../Comments/Comments";
import css from './CommentsPage.module.css'
const CommentsPage = () => {
    return (
        <div className={css.CommentsPage}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};
import React from 'react';
import css from './Todo.module.css'
const Todo = ({todo}) => {
    const {id, title} = todo;
    return (
        <div className={css.Todo}>
            <div>id: {id}</div>
            <div>  title: {title}</div>

        </div>
    );
};

export {Todo};
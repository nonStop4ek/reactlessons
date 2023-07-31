import React from 'react';
import {useForm} from "react-hook-form";

const UserForm = ({setNewUser}) => {
    const {register, reset, handleSubmit} = useForm();
    const save = (user) => {
        fetch('http://jsonplaceholder.typicode.com/users',{
            headers:{'Content-type':'application/json'},
            method:'POST',
            body:JSON.stringify(user)
            }
            )
            .then(value => value.json())
            .then(value => {setNewUser(prev=>[...prev,value])
                reset()})
    };
    return (
        <form onSubmit={handleSubmit(save)}>
            <label>name:<input type="text" placeholder={'name'}{...register('name')}/></label>
            <label>username:<input type="text" placeholder={'username'}{...register('username')}/></label>
            <label>email:<input type="text" placeholder={'email'}{...register('email')}/></label>
            <label>city:<input type="text" placeholder={'city'}{...register('address.city')}/></label>
            <button>save</button>
        </form>
    );
};

export {UserForm};
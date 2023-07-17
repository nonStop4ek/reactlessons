import React, {useEffect, useState} from 'react';
import {UserComponent} from "../UserComponent/UserComponent";

const UserContainer = ({SetUserId}) => {
    const [users,SetUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => SetUsers(value))

    },[])
    return (
        <div>
            {users.map(user=><UserComponent key={user.id} user={user} SetUserId={SetUserId}/>)}
        </div>
    );
};

export {UserContainer};
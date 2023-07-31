import React, {useState} from 'react';
import {UserForm} from "./userForm/UserForm";
import {Users} from "./Users/Users";

const UserContainer = () => {
const [newUser,setNewUser] = useState(null);
    return (
        <div>
           <UserForm setNewUser={setNewUser}/>
            <hr/>
            <Users/>
        </div>
    );
};

export {UserContainer};
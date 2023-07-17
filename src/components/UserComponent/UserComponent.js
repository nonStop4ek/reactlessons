import React from 'react';

const UserComponent = ({user,SetUserId}) => {
    const {id,name,username} = user;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <button onClick={()=>SetUserId(id)}>Get</button>
        </div>
    );
};

export {UserComponent};
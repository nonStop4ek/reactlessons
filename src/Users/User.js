import React from 'react';

const User = ({user,setPost}) => {
    const {id,name} = user;
    return (
        <div>
            <div>id user:{id}</div>
            <div>name user:{name}</div>
            <button onClick={()=>setPost(user)}>details</button>

        </div>
    );
};

export default User;
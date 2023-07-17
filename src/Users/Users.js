import React, {useEffect, useState} from 'react';
import axios from "axios";
import User from "./User";

const Users = () => {
    const [users,setUsers] = useState([]);
    const [post,setPost] = useState([]);
useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.data)
        .then(value => setPost([...value]))
})

useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
        .then(value => value.data)
        .then(value => setUsers([...value]))


},[])
    return (  post&&
        <div>
            <div>body:{post.body}</div>

            {
                users.map(user=><User key={user.id} user={user} setPost={setPost} post={post}/>)
            }
        </div>
    );
};

export default Users;
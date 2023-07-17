import React, {useEffect, useState} from 'react';
import {Post} from "../post/post";

const Posts = ({userId}) => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(post => setPosts(post))
    }, [])
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
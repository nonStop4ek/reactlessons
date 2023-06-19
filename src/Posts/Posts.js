import React, {useEffect, useState} from 'react';
import axios from "axios";

import UserPost from "../userPost/userPost";

const Posts = () => {
     const [posts,setPosts]=useState([]);
     const [post,setPost] = useState(null);
    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.data)
            .then(value => setPosts([...value]))
    },[])
    return (
        <div>
            {
                post&&
                <div>


                <div>body:{post.body}</div>
                </div>}
        {
            posts.map(userPost=><UserPost key={userPost.id} userPost={userPost} setPost={setPost} /> )
        }
        </div>
    );
}

export default Posts;
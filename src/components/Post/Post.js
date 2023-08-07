import React, {useEffect, useState} from 'react';
import {PostDetail} from "./PostDetail/PostDetail";
import {useParams} from "react-router-dom";
import {postsService} from "../../services";

const Post = () => {
    const [post, setPost] = useState(null)
    const {postId} = useParams();
    useEffect(()=>{
        postsService.getById(postId).then(({data})=>setPost(data))
    },[postId])
    return (
        <div>
            {post&&<PostDetail post={post}/>}
        </div>
    );
};

export {Post};
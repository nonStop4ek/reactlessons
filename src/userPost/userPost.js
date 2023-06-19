import React from 'react';

const UserPost = ({userPost,setPost}) => {
    const {id,title}=userPost
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
        <button onClick={()=>setPost(userPost)}>details</button>

        </div>
    );
};

export default UserPost;
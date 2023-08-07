import React from 'react';

const PostDetail = ({post}) => {
    const {id,title} = post;
    return (
        <div>
            <div>Post id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {PostDetail};
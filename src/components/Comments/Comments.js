import React from 'react';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../Detail/Detail'

const Comments = () => {

    const {postId} = useParams();
    console.log(postId)
    const [comments, setComments] = useState([]);
    console.log("some comments",comments);
    const {id} = comments;
    console.log("show id", id)

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`

        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [])

  
    return (
        <div>
            <h1>All comments from post :  {postId}</h1>
            
                 {
                    comments.map(post => <Detail post = {post} ></Detail> )
                  } 
            
        </div>
    );
};

export default Comments;
import React from 'react';
import { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
  }, [])

  
 
    return (
        <div>
          
          
          {
            posts.map(post => <Posts post = {post} ></Posts> )
          }
            
            
        </div>
    );
};

export default Home;
import React from 'react';
import './Detail.css'
import Photos from '../Photos/Photos';
function Detail(props) {
    const {email, body} = props.post;
  
    
      return (
        <div className = "detail">
            <div className = "comments-detail">
              <img className= "img" src="https://miro.medium.com/max/280/1*MccriYX-ciBniUzRKAUsAw.png" alt=""/>
              
            </div>
            <p>({email}) commented: </p>
            <h4>{body}</h4>

            <Photos></Photos>
        </div>
    );



    };


  export default Detail;
  
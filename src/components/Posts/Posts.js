import React from 'react';
import {Link} from "react-router-dom";
import './Post.css'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 140,
  },
});


function Posts(props) {
  const {body, title, id} = props.post;

  const classes = useStyles();
    return (
      <div className = "post-style">
          
    
          <Card className={classes.root}>
            <CardActionArea>
            
                
              <CardContent>
              <h2>Post {id}</h2>
                <Typography gutterBottom variant="h5" component="h2"> Title :  
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p"> Post body: 
                  {body}
                </Typography>
              </CardContent>
              
            </CardActionArea>

            <Link to = {`/post/${id}`}>
                <Button size="small" className = "button-class">
                  See related Comments
                </Button>
                </Link>
 
    </Card>

      </div>
    );



    };


  export default Posts;
  
import React from 'react';
import Home from './components/Home/Home';
import Comments from './components/Comments/Comments'
import Posts from './components/Posts/Posts'
import Nav from './components/Nav/Nav'
import NoMatch from './components/NoMatch/NoMatch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Profile from './components/Profile/Profile';
import Connections from './components/Connections/Connections';
import Photos from './components/Photos/Photos';


function App() {
  

  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Nav></Nav>
          <Home></Home>

        </Route >

        <Route path = "/home">
          <Home></Home>
        </Route>

        <Route path = "/newsfeed">
        <Nav></Nav>
        <Home></Home>
        </Route>

        <Route path = "/post/:postId">
        <Nav></Nav>
        <Comments></Comments>
        <Photos></Photos>
        </Route>

        <Route path = "/profile">
          <Nav></Nav>
          <Profile></Profile>
        </Route>

        <Route path = "/connections">
          <Nav></Nav>
          <Connections></Connections>
        </Route>

        {/* <Route path = "/photos/:someId">
        <Nav></Nav>
        <Comments></Comments>
        </Route> */}

        <Route path= "*">
        <NoMatch></NoMatch>
        </Route>

        
      </Switch>

    </Router>
  );
}

export default App;

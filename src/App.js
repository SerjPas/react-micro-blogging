import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TweetPage from './Pages/TweetPage';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import UserContext from './context/UserContext'
import {logout} from './auth'
import UserProfile from "./Pages/UserProfile";
import Container from "@material-ui/core/Container";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import {auth, db} from "./index";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  console.log(currentUser);

  const handleCurrentUser = (user) => {
    setCurrentUser(user)
  }

  const handleLogout = async () => {
    await logout()
        .then(() => {
          setCurrentUser(null)
        });
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setCurrentUser(null);
      } else {
        const loggedInUser = {
          id: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        setCurrentUser(loggedInUser);
        firebase
            .firestore()
            .collection("users")
            .doc(loggedInUser.id)
            .set(loggedInUser)
            .then();
      }
    });
  }, []);

  return (
      <div>
        <UserContext.Provider value={{currentUser, handleCurrentUser, handleLogout}}
        >
          <Router>
            <CssBaseline/>
            <Grid container style={{justifyContent: "center", display: "flex"}}>
              <Grid item xs={12} lg={8}>
                <NavBar/>
              </Grid>
            </Grid>
            <Container>
              <Switch>
                <Route exact path="/signup">
                  <Signup/>
                </Route>
                <Route exact path="/login">
                  <Login/>
                </Route>
                {currentUser ? (<Route path="/profile"><UserProfile/></Route>)
                    : (<Redirect to={{pathname: '/login'}}/>)}

                {currentUser ? (<Route path="/"><TweetPage/></Route>)
                    : (<Redirect to={{pathname: '/login'}}/>)}
              </Switch>
            </Container>
          </Router>
        </UserContext.Provider>
      </div>
  );
}

export default App;
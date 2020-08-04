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
import {auth} from "./index";
import UserProfile from "./Pages/UserProfile";
import Container from "@material-ui/core/Container";

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
    return auth().onAuthStateChanged((user) => {
      user ? handleCurrentUser(user) : handleCurrentUser(null);
    });
  });

  return (
      <div>
        <UserContext.Provider value={{currentUser, handleCurrentUser, handleLogout}}
        >
          <Router>
            <CssBaseline/>
            <Container>
              <Grid container style={{justifyContent: "center", display: "flex"}}>
                <Grid item xs={12} lg={8}>
                  <NavBar/>
                </Grid>
              </Grid>
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
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import TweetPage from './Pages/TweetPage';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container'
import UserProfile from './Pages/UserProfile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Login from './Pages/Login'
import Signup from './Pages/Signup'


function App() {
  return (
    <div>
      <Router>
        <CssBaseline />
        <Container>
          <Grid container style={{ justifyContent: "center", display: "flex" }}>
            <Grid item xs={12} lg={8} >
              <NavBar />
            </Grid>
          </Grid>
          <Switch>
            <Route exact path="/signup">
              <Signup/>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;

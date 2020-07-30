import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import TweetPage from './components/TweetPage';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container'
import UserProfile from './components/UserProfile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from '@material-ui/core/Grid';


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
            <Route exact path="/">
              <UserProfile />
            </Route>
            <Route path="/tweets">
              <TweetPage />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;

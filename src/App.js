import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import TweetPage from './components/TweetPage';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container'
import UserProfile from './components/UserProfile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <CssBaseline />
        <Container>
            <NavBar></NavBar>
            <Switch>
              <Route path="/profile">
                <UserProfile />
              </Route>
              <Route path="/">
                <TweetPage></TweetPage>
              </Route>
            </Switch>
        </Container>
      </Router>

    </div>

  );
}

export default App;

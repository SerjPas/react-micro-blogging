import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import './App.css';
import CreateTweet from './components/createTweet';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <CreateTweet>
        </CreateTweet>
      </Container>
    </>
  );
}

export default App;

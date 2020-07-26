import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';
import TweetPage from './components/TweetPage';


function App() {
  return (
    <div>
      <CssBaseline/>
      <TweetPage></TweetPage>
    </div>
    
  );
}

export default App;

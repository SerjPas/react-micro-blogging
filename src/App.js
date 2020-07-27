import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
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

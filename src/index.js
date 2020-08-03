import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC6OyRCTsWh6ZvLUA8lQ2jgEvgw8ci5kno",
    authDomain: "microblogging-project.firebaseapp.com",
    databaseURL: "https://microblogging-project.firebaseio.com",
    projectId: "microblogging-project",
    storageBucket: "microblogging-project.appspot.com",
    messagingSenderId: "45719062868",
    appId: "1:45719062868:web:6ba70f40ada88e4342a0c1",
    measurementId: "G-6KNN7QR1QK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

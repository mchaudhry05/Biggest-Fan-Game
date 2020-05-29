import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDbFGNRIUPQ83Lx2VH8visOK4mxb_dulMI",
    authDomain: "the-biggest-fan.firebaseapp.com",
    databaseURL: "https://the-biggest-fan.firebaseio.com",
    projectId: "the-biggest-fan",
    storageBucket: "the-biggest-fan.appspot.com",
    messagingSenderId: "513791192855",
    appId: "1:513791192855:web:4c13b74eae027c3e981152",
    measurementId: "G-TWN82Q6K73"
  };


  firebase.initializeApp(config)

ReactDOM.render(<App />,document.getElementById('root'));



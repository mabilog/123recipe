import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth'
// import { getFirestore } from 'firebase/firebase';

// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyBtHIsxX2eJwlAAYI4wOfXW-2r1Gc350vo",
//   authDomain: "recipe-8285a.firebaseapp.com",
//   projectId: "recipe-8285a",
//   storageBucket: "recipe-8285a.appspot.com",
//   messagingSenderId: "377671597883",
//   appId: "1:377671597883:web:68047b4567c1027f16811e"
// })

// const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

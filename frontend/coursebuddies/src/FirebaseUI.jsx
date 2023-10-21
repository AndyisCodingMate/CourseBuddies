import React, { useEffect } from 'react';
import firebase from './firebaseConfig';
import 'firebaseui/dist/firebaseui.css';
import * as firebaseui from 'firebaseui';

const FirebaseUI = () => {
  useEffect(() => {
    // Initialize the FirebaseUI widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(firebase.auth());

    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          // User successfully signed in.
          // You can redirect here.
          return true;
        },
        uiShown: function () {
          // Hide loader.
          document.getElementById('loader').style.display = 'none';
        },
      },
      signInFlow: 'popup',
      signInSuccessUrl: '/',  // url to redirect to on success
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // add other providers you want to support
      ],
      tosUrl: '/terms-of-service',  // your terms of service url
      privacyPolicyUrl: '/privacy-policy',  // your privacy policy url
    };

    // Start the UI.
    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  return (
    <div>
      <h1>Welcome to My Awesome App</h1>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  );
};

export default FirebaseUI;

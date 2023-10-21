import React, { useEffect } from 'react';
import firebase from './firebaseConfig';
import 'firebaseui/dist/firebaseui.css';
import * as firebaseui from 'firebaseui';

const FirebaseUI = () => {
  useEffect(() => {
    // Initialize the FirebaseUI widget using Firebase
    const ui = new firebaseui.auth.AuthUI(firebase.auth());

    // FirebaseUI config options
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
    };

    // Check if there's a pending email link sign-in or other redirect operation
    if (ui.isPendingRedirect() || firebase.auth().isSignInWithEmailLink(window.location.href)) {
      ui.start('#firebaseui-auth-container', uiConfig);
    }
  }, []);

  return <div id="firebaseui-auth-container"></div>;
};

export default FirebaseUI;

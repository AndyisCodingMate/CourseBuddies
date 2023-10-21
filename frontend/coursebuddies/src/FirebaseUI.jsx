import React, { useEffect } from 'react';
import firebase from './firebaseConfig';
import 'firebaseui/dist/firebaseui.css';
import * as firebaseui from 'firebaseui';

const FirebaseUI = () => {
    useEffect(() => {
        const uiConfig = {
            signInSuccessUrl: '/',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
        };
        const ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
    }, []);

    return <div id="firebaseui-auth-container"></div>;

};

export default FirebaseUI;
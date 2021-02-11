import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDL8Njprlp5J1XPQIdDAsHeWh4X45AjRZ0",
    authDomain: "react-e-commerce-95a61.firebaseapp.com",
    projectId: "react-e-commerce-95a61",
    storageBucket: "react-e-commerce-95a61.appspot.com",
    messagingSenderId: "774314396127",
    appId: "1:774314396127:web:c5d1d5896b4c41108cdc6a"
  })

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}


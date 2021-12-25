import firebase from "firebase";

const firebaseConfig = {
    .......
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();


export { db, storage };

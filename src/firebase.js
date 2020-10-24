import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDkT81rT1x0Vu44x7HKKh6sL68A0QpZDk",
  authDomain: "imessage-clone-476b5.firebaseapp.com",
  databaseURL: "https://imessage-clone-476b5.firebaseio.com",
  projectId: "imessage-clone-476b5",
  storageBucket: "imessage-clone-476b5.appspot.com",
  messagingSenderId: "553579750926",
  appId: "1:553579750926:web:6d7b845ca0983cab73fe5f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCOZDnhz0qQunPDTG1ElJNC3nQ3znAQWYs",
  authDomain: "viflix-533a6.firebaseapp.com",
  databaseURL: "https://viflix-533a6.firebaseio.com",
  projectId: "viflix-533a6",
  storageBucket: "viflix-533a6.appspot.com",
  messagingSenderId: "976997526020",
  appId: "1:976997526020:web:ba3ca4c73568824bed6351"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);


export { firebase };

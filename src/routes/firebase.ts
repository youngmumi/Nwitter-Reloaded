import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOryfKyMj5lN93T424uPvZ6Q8S1JMqKrU",
  authDomain: "nwitter-reloaded-758c7.firebaseapp.com",
  projectId: "nwitter-reloaded-758c7",
  storageBucket: "nwitter-reloaded-758c7.firebasestorage.app",
  messagingSenderId: "99896872125",
  appId: "1:99896872125:web:ef395345de7d353031bbd4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
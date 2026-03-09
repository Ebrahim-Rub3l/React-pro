// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCov1gvL12ei4_bX2K9CZD82ib5e5EsJuo",
  authDomain: "todo-e6aea.firebaseapp.com",
  databaseURL: "https://todo-e6aea-default-rtdb.firebaseio.com",
  projectId: "todo-e6aea",
  storageBucket: "todo-e6aea.firebasestorage.app",
  messagingSenderId: "898356104234",
  appId: "1:898356104234:web:d32608fc9c75bbb8b8c753"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig
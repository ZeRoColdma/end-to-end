import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIgr5iP-x6d4nXD4K65u-eoWs4ZSdJIMc",
  authDomain: "dashboards-pbi.firebaseapp.com",
  databaseURL: "https://dashboards-pbi.firebaseio.com",
  projectId: "dashboards-pbi",
  storageBucket: "dashboards-pbi.appspot.com",
  messagingSenderId: "617174825903",
  appId: "1:617174825903:web:fe0d70e99b24a547578d5a",
  measurementId: "G-WSVR9086SJ",
};

;
export const auth = firebase.auth();

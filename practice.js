//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAVBBLZhwyb5s5ONZcpF5BDnzgWlkCr0Js",
    authDomain: "practice-kwitter-f0ae3.firebaseapp.com",
    databaseURL: "https://practice-kwitter-f0ae3-default-rtdb.firebaseio.com",
    projectId: "practice-kwitter-f0ae3",
    storageBucket: "practice-kwitter-f0ae3.appspot.com",
    messagingSenderId: "1089983335830",
    appId: "1:1089983335830:web:544a06e4e025758888e1b7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
      user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
  }
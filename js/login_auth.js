import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBF7z9l-7hbe4F7wtulKS9RlCcS8JECZsI",
  authDomain: "final-32493.firebaseapp.com",
  databaseURL: "https://final-32493-default-rtdb.firebaseio.com",
  projectId: "final-32493",
  storageBucket: "final-32493.appspot.com",
  messagingSenderId: "818461015027",
  appId: "1:818461015027:web:8033ad40f4abb9366e7086",
  measurementId: "G-H08EE1TER7"
};
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function(user)
{
  
});
function login(event)
{
  event.preventDefault()
  var email = document.getElementById('email_id').value
  var password = document.getElementById('password_id').value
  firebase.auth().signInWithEmailAndPassword(email,password).catch(function(console,error)
  {
    console.log('Error Signing in,',error.message)
    alert(error.message)
  }).then(function(user)
  {
    if(user)
    {
      alert('Welcome')
    }
  });
}
function logut()
{
  firebase.auth().signOut().then(function()
  {

  }).catch(function(error)
  {

  });
}
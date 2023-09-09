
  var firebaseConfig = {
    apiKey: "AIzaSyCMSLP75oqnnh2wU9kIU7rL6ncasvEEC14",
    authDomain: "msgiot.firebaseapp.com",
    databaseURL: "https://msgiot-default-rtdb.firebaseio.com",
    projectId: "msgiot",
    storageBucket: "msgiot.appspot.com",
    messagingSenderId: "514666306898",
    appId: "1:514666306898:web:f8640d1701f8e8c1cc6e8b",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var temp = document.getElementById('temp');
  var humidity = document.getElementById('humidity');
  var soil = document.getElementById('soil');
  var water = document.getElementById('water');
  var dbRef = firebase.database().ref().child('Home/Temp/');
  dbRef.on('value', snap => temp.innerText = snap.val());
  var dbRef1 = firebase.database().ref().child('Home/Hum/');
  dbRef1.on('value', snap => humidity.innerText = snap.val());
  var dbRef1 = firebase.database().ref().child('Home/Soil/');
  dbRef1.on('value', snap => soil.innerText = snap.val());
  var dbRef1 = firebase.database().ref().child('Home/wq/');
  dbRef1.on('value', snap => water.innerText = snap.val());

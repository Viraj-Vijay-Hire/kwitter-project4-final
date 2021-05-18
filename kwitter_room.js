
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCcEW9B4uDQhUsrvUfHbJ0EpYa_3IcPzoI",
    authDomain: "kwitter-project-fc1ad.firebaseapp.com",
    databaseURL: "https://kwitter-project-fc1ad-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-fc1ad",
    storageBucket: "kwitter-project-fc1ad.appspot.com",
    messagingSenderId: "52395111516",
    appId: "1:52395111516:web:78433292b9969e85642299",
    measurementId: "G-8V8SH43NM9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) { 
  document.getElementById("output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) { 
  childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
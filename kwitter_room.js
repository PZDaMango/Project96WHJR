
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA-sxT7AFbmTkhfCQo6Wvr3jssTOLEwEKI",
    authDomain: "classtest-74ca2.firebaseapp.com",
    projectId: "classtest-74ca2",
    storageBucket: "classtest-74ca2.appspot.com",
    messagingSenderId: "861138405008",
    appId: "1:861138405008:web:84f4ce6614d47847d5ba15"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name- " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById ("output").innerHTML += row;
    //End code
    });});}
getData();


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()  {
  localStorage.removeItem("user_name");
  localStorage.removeItem("roomname");
    window.location = "index.html";
  }
  
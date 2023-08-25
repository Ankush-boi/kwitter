var firebaseConfig = { apiKey: "AIzaSyBtxPkU28c6TlJB9MI2SVhGXXa-VZZXv5E", authDomain: "kwitterwhjr.firebaseapp.com", databaseURL: "https://kwitterwhjr-default-rtdb.firebaseio.com", projectId: "kwitterwhjr", storageBucket: "kwitterwhjr.appspot.com", messagingSenderId: "446967594048", appId: "1:446967594048:web:dfbd60d9f009ce303f73a5" }; // Initialize Firebase 
firebase.initializeApp(firebaseConfig);

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "WELCOME " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}


//ADD YOUR FIREBASE LINKS HERE

      const firebaseConfig = {
            apiKey: "AIzaSyBoUPdsa2GPEI8-CnkLEyMru1OpF9qsWSM",
            authDomain: "kwitter-db455.firebaseapp.com",
            projectId: "kwitter-db455",
            storageBucket: "kwitter-db455.appspot.com",
            messagingSenderId: "210559590561",
            appId: "1:210559590561:web:27609735d021d0676e90e0",
            measurementId: "G-CSNR237YFL"
          };
          
          // Initialize Firebase
          const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-",Room_names);
row=<div class="room_name"id="+Room Names+"onclick='redirect toroomname(this.id)'></div>
document.getElementById("output").innerHtml +=row;
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value ;
     firebase.database().ref("/").child("room_name").update({
      purpose: "adding room name"
     });
     localStorage.setItem("room_name",room_name );
     window.location="kwitter_page.html";
}

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
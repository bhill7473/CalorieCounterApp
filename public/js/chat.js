$(document).ready(function(){


var config = {
    apiKey: "AIzaSyDZUXAXJP3n5znLtCmlT_QJxg-g-gGKIls",
    authDomain: "exampledata-9c4a0.firebaseapp.com",
    databaseURL: "https://exampledata-9c4a0.firebaseio.com",
    projectId: "exampledata-9c4a0",
    storageBucket: "exampledata-9c4a0.appspot.com",
    messagingSenderId: "309109035469"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#pstsbmt").on("click", function(event){
      event.preventDefault();
      var message = $("#chat").val().trim();
      var name = $("#name").val().trim(); 
      console.log(name);
      var newMsg = {
          message:message,
          name:name
      }
      database.ref().push(newMsg);


      console.log(newMsg.message);
      console.log(newMsg.name);

      $("#chat").val("");
      $("#name").val("");
  });



  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var message = childSnapshot.val().message;
    var name = childSnapshot.val().name;
      
  
    // Employee Info
    console.log(message);
    console.log(name);

    var newDiv = $("<div>").append(
        $("<p>").text(message),
        $("<h5>").text(name)


    );
     newDiv.addClass("postDiv");
    $("#blogPosts").append(newDiv);
  });
});
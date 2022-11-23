
function insertName() {
  firebase.auth().onAuthStateChanged(user => {
      // Check if a user is signed in:
      if (user) {
          // Do something for the currently logged-in user here: 
          console.log(user.uid);
          console.log(user.displayName);
          user_Name = user.displayName;


          //method #1:  insert with html only
          //document.getElementById("name-goes-here").innerText = user_Name;    //using javascript
          //method #2:  insert using jquery
          $("#name-goes-here").text(user_Name); //using jquery

      } else {
          // No user is signed in.
      }
  });
}

// function high(){
//   firebase.auth().onAuthStateChanged(user => {
//   db.collection("users").doc(user.uid)
//   .onSnapshot(nameDoc => {
//     console.log("current doc data: " + nameDoc.data().name);
//     document.getElementById("name-goes-here").innerHTML = "User name: " + nameDoc.data().name;
//     console.log("current doc data: " + nameDoc.data().score);
//     document.getElementById("score-goes-here").innerHTML = "User score: " + nameDoc.data().score;
//   })
// });
// }

// high();

insertName();

function populateScores(){
    // let hikeCardTemplate = document.getElementById("hikeCardTemplate");
    let hikeCardGroup = document.getElementById("highscore");
db.collection("users")
    // .where("level", "==", "moderate")
    .orderBy("score", "desc")
    .limit(10)
    .get()
        .then(allScores => {
            allScores.forEach(doc => {
                var userName = doc.data().name; //gets the name field
                var score = doc.data().score; //gets the length field
                let testHikeCard = hikeCardTemplate.content.cloneNode(true);
                testHikeCard.querySelector("#name-goes-here").innerHTML = userName;     
                testHikeCard.querySelector("#score-goes-here").innerHTML = score;  

                // document.querySelector('#name-goes-here').innerHTML = userName;
                // document.querySelector('#score-goes-here').innerHTML = score;              

                hikeCardGroup.appendChild(testHikeCard);        
            })
        })
    }
    
    populateScores();

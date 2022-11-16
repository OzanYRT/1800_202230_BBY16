
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

insertName();

var score = 0;

function addScore(){
  score = score + 1;

  document.getElementById("score").innerHTML = score;

}

// function save(){
//   firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//         console.log(user.uid);
//         console.log(user.displayName);
//         user_Name = user.displayName;

//         user_name = user.displayName;

//         $("#name-goes-here").text(user_Name);

//         db.collections("users).doc(user.uid).add({
//           score : score,
//           purpose: "Adding Score"
//         })

//     }
//   ;

  // firebase.database().ref("/").child(user_name).update({
  //   score : score,
  //   purpose: "Adding Score"
  // })
// }
save();
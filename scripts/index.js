// function read_display_Quote(){
//     //console.log("inside the function")

//     //get into the right collection
//     db.collection("quotes").doc("tuesday")
//     .onSnapshot(function(tuesdayDoc) {
//         //console.log(tuesdayDoc.data());
//         document.getElementById("quote-goes-here").innerHTML=tuesdayDoc.data().quote;
//     })
// }
// read_display_Quote();


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

function readQuote() {
    db.collection("quotes").doc("tuesday")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
      .onSnapshot(tuesdayDoc => {                                                               //arrow notation
           console.log("current document data: " + tuesdayDoc.data());                          //.data() returns data object
           document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote;      //using javascript to display the data on the right place
           
           //Here are other ways to access key:value data fields
           //$('#quote-goes-here').text(tuesdayDoc.data().quote);                                       //using jquery object dot notation
           //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);                                    //using json object indexing
      })
}

readQuote();        //calling the function
// insertName(); //run the function




// function displayCards(collection) {
//     let cardTemplate = document.getElementById("hikeCardTemplate");

//     db.collection(collection).get()
//         .then(snap => {
//             //var i = 1;  //if you want to use commented out section
//             snap.forEach(doc => { //iterate thru each doc
//                 var title = doc.data().name;        // get value of the "name" key
//                 var details = doc.data().details;   // get value of the "details" key
// 								var hikeID = doc.data().code;    //get unique ID to each hike to be used for fetching right image
//                 let newcard = cardTemplate.content.cloneNode(true);

//                 //update title and text and image
//                 newcard.querySelector('.card-title').innerHTML = title;
//                 newcard.querySelector('.card-text').innerHTML = details;
//                 newcard.querySelector('.card-image').src = `./images/${hikeID}.jpg`; //Example: NV01.jpg

//                 //give unique ids to all elements for future use
//                 // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
//                 // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
//                 // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

//                 //attach to gallery
//                 document.getElementById(collection + "-go-here").appendChild(newcard);
//                 //i++;   //if you want to use commented out section
//             })
//         })
// }

// displayCards("hikes");



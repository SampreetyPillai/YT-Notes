import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB7xNZ46ljOSgfMYjOfd1ZcdafPkTscjL4",
  authDomain: "ytyt-ae2fd.firebaseapp.com",
  projectId: "ytyt-ae2fd",
  storageBucket: "ytyt-ae2fd.appspot.com",
  messagingSenderId: "625413981572",
  appId: "1:625413981572:web:d71a68a1ae47a14fc909d1",
  measurementId: "G-KJ6JEZ4J35"
};
const app = initializeApp(firebaseConfig);
document.addEventListener('DOMContentLoaded', documentEvents  , false);
console.log(app);
function myAction(input) { 
    console.log("input value is : " + input.value);
    alert("The entered data is : " + input.value);

    // do processing with data
    // you need to right click the extension icon and choose "inspect popup"
    // to view the messages appearing on the console.
}

function documentEvents() {    
  document.getElementById('ok_btn').addEventListener('click', 
    function() { myAction(document.getElementById('name_textbox'));
  });

  // you can add listeners for other objects ( like other buttons ) here 
}
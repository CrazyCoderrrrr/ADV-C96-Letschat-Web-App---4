const firebaseConfig = {
  apiKey: "AIzaSyDScx054nsvInZLHlIbjqZILeJoGzWQPdc",
  authDomain: "chat-box-90ca2.firebaseapp.com",
  databaseURL: "https://chat-box-90ca2-default-rtdb.firebaseio.com",
  projectId: "chat-box-90ca2",
  storageBucket: "chat-box-90ca2.appspot.com",
  messagingSenderId: "39480079516",
  appId: "1:39480079516:web:4d7abfe540ade44950a959",
  measurementId: "G-B8RP923ZL9"
};

firebase.initializeApp(firebaseConfig);

function addroom()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
  });
}
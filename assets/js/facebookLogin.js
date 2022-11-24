
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAuth, FacebookAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAVj76Krc4PLcUT4QD3evbQYMAnRXCC3UE",
    authDomain: "charitable-auth.firebaseapp.com",
    projectId: "charitable-auth",
    storageBucket: "charitable-auth.appspot.com",
    messagingSenderId: "1052480373776",
    appId: "1:1052480373776:web:571ad9175193f56ef23695"
  };

  // get the name last name of user 

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new FacebookAuthProvider(app);

  loginfb.addEventListener('click', (e) => {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        window.location = 'index.html'; //After successful login, user will be redirected to home.html
      }
      firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.write (user);
    let name = user;
    document.getElementById("name").innerHTML = name;
  } else {
    // No user logged in.
  }
});
    });

  });

  
  
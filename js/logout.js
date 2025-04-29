// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDUXUtsogtFVVzZB-JwnZoBN91gGwGlSM",
  authDomain: "medihome-86de6.firebaseapp.com",
  projectId: "medihome-86de6",
  storageBucket: "medihome-86de6.appspot.com",  // Fixed storage bucket
  messagingSenderId: "268872743840",
  appId: "1:268872743840:web:fbeb9d371c04849485c2c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Show message utility
function showMessage(message, divId) {
  var messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(function () {
    messageDiv.style.opacity = 0;
  }, 5000);
}
document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('loggedIn');
  
  window.location.href = 'homepage.html'; // back to login or homepage
});


// Listen to authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    document.getElementById('login-btn').style.display = 'none'; // Hide login button
    document.getElementById('logout-btn').style.display = 'block'; // Show logout button
  } else {
    // No user is signed in
    document.getElementById('login-btn').style.display = 'block'; // Show login button
    document.getElementById('logout-btn').style.display = 'none'; // Hide logout button
  }
});

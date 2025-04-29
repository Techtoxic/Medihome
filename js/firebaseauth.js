import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDUXUtsogtFVVzZB-JwnZoBN91gGwGlSM",
    authDomain: "medihome-86de6.firebaseapp.com",
    projectId: "medihome-86de6",
    storageBucket: "medihome-86de6.appspot.com",
    messagingSenderId: "268872743840",
    appId: "1:268872743840:web:fbeb9d371c04849485c2c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Ensure login status is handled when the page loads
window.onload = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is logged in, store the session in localStorage
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('loggedInUserId', user.uid);
        } else {
            // User is logged out, clear localStorage session data
            localStorage.setItem('loggedIn', 'false');
            localStorage.removeItem('loggedInUserId');
        }
    });
};

// Log out function
function logout() {
    signOut(auth).then(() => {
        // Clear session data from localStorage
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('loggedInUserId');
        
        // Redirect to the login page after logging out
        window.location.href = 'signin.html';
    }).catch((error) => {
        console.error("Error logging out: ", error);
    });
}

// Check login status before booking
function checkLoginBeforeBooking() {
    const isLoggedIn = localStorage.getItem('loggedIn');

    if (isLoggedIn === 'true') {
        // User is logged in, proceed with booking
        window.location.href = "booking.html";  // Redirect to booking page
    } else {
        // User is not logged in, alert and redirect to login page
        alert("Please log in to book an appointment.");
        window.location.href = "signin.html";  // Redirect to the login page
    }
}

// Event listener for the booking button (instead of inline onclick in HTML)
document.getElementById('bookAppointmentLink').addEventListener('click', (event) => {
    // Prevent default anchor behavior
    event.preventDefault();

    // Call the checkLoginBeforeBooking function
    checkLoginBeforeBooking();
});

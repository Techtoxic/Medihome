import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

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
const auth = getAuth();
const db = getFirestore();

function showMessage(message, divId){
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(() => {
        messageDiv.style.opacity = 0;
    }, 5000);
}

// ---------- Sign Up ----------
const signUp = document.getElementById('submitSignUp');
if (signUp) {
    signUp.addEventListener('click', (event) => {
        event.preventDefault();
        const email = document.getElementById('rEmail').value.trim().toLowerCase();
        const password = document.getElementById('rPassword').value;
        const firstName = document.getElementById('fName').value;
        const lastName = document.getElementById('lName').value;

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                email: email,
                firstName: firstName,
                lastName: lastName
            };
            const docRef = doc(db, "users", user.uid);
            setDoc(docRef, userData)
            .then(() => {
                showMessage('Account Created Successfully', 'signUpMessage');
                window.location.href = 'homepage.html';
            })
            .catch((error) => {
                console.error("Error writing document", error);
            });
        })
        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                showMessage('Email Address Already Exists !!!', 'signUpMessage');
            } else {
                showMessage('Unable to create user', 'signUpMessage');
            }
        });
    });
}

// ---------- Sign In ----------
const signInForm = document.getElementById('submitSignIn');
if (signInForm) {
    signInForm.addEventListener('click', async (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value.trim().toLowerCase();
        const password = document.getElementById('password').value;

        if (!email || !password) {
            showMessage('Please enter both email and password.', 'signInMessage');
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('loggedInUserId', userCredential.user.uid);
            showMessage('Login successful!', 'signInMessage');
            window.location.href = 'homepage.html';
        } catch (error) {
            console.error("Sign-in error:", error.code);
            let userMessage = 'Invalid Credentials. Please try again.';
            if (error.code === 'auth/user-not-found') {
                userMessage = 'No account found with this email.';
            } else if (error.code === 'auth/wrong-password') {
                userMessage = 'Incorrect password. Please try again.';
            } else if (error.code === 'auth/invalid-email') {
                userMessage = 'Invalid email format.';
            }
            showMessage(userMessage, 'signInMessage');
        }
    });
}
document.getElementById('bookAppointmentBtn').addEventListener('click', (e) => {
    const userId = localStorage.getItem('loggedInUserId'); // or 'loggedIn' flag

    if (!userId) {
        e.preventDefault(); // stop the button from submitting/redirecting
        alert("⚠️ You must be logged in to book an appointment.");
        window.location.href = "register.html"; // redirect to login
        return;
    }

    // User is logged in, continue with booking logic here...
});

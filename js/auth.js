// Check if user is logged in on page load
window.addEventListener('DOMContentLoaded', () => {
    updateAuthButtons(isLoggedIn());
});

// Function to check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Function to handle logout
function logout() {
    localStorage.setItem('isLoggedIn', 'false');
    updateAuthButtons(false);
    window.location.href = 'homepage.html';
}

// Function to update button text based on auth state
function updateAuthButtons(loggedIn) {
    const desktopButton = document.getElementById('auth-button-desktop');
    const mobileButton = document.getElementById('auth-button-mobile');
    const mobileLoginBtn = document.getElementById('mobileLoginBtn');
    const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');
    
    if (loggedIn) {
        if (desktopButton) {
            desktopButton.textContent = 'Logout';
            desktopButton.href = '#';
            desktopButton.onclick = logout;
        }
        if (mobileButton) {
            mobileButton.textContent = 'Logout';
            mobileButton.href = '#';
            mobileButton.onclick = logout;
            mobileButton.style.display = 'inline-flex';
        }
        if (mobileLoginBtn) mobileLoginBtn.style.display = 'none';
        if (mobileLogoutBtn) mobileLogoutBtn.style.display = 'inline-block';
    } else {
        if (desktopButton) {
            desktopButton.textContent = 'Login';
            desktopButton.href = 'register.html';
            desktopButton.onclick = null;
        }
        if (mobileButton) {
            mobileButton.textContent = 'Login';
            mobileButton.href = 'register.html';
            mobileButton.onclick = null;
            mobileButton.style.display = 'inline-flex';
        }
        if (mobileLoginBtn) mobileLoginBtn.style.display = 'inline-block';
        if (mobileLogoutBtn) mobileLogoutBtn.style.display = 'none';
    }
}

// Handle auth button click
function handleAuthClick() {
    const currentlyLoggedIn = isLoggedIn();
    
    if (currentlyLoggedIn) {
        logout();
    } else {
        window.location.href = 'register.html';
    }
}
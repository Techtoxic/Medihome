document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('signUpButton');
    const signInButton = document.getElementById('signInButton');
    const signInForm = document.getElementById('signIn');
    const signUpForm = document.getElementById('signup');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.navbar nav');

    if(signUpButton) {
        signUpButton.addEventListener('click',function(){
            signInForm.style.display="none";
            signUpForm.style.display="block";
        });
    }

    if(signInButton) {
        signInButton.addEventListener('click', function(){
            signInForm.style.display="block";
            signUpForm.style.display="none";
        });
    }

    // Mobile menu toggle
    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('show');
            // Toggle menu icon
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (nav && nav.classList.contains('show') && !nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            nav.classList.remove('show');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});

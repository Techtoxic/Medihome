// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    // Function to toggle mobile menu
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden');
    }

    // Open mobile menu
    mobileMenuButton.addEventListener('click', toggleMobileMenu);

    // Close mobile menu
    closeMobileMenuButton.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            toggleMobileMenu();
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const sideMenu = document.getElementById('sideMenu');

    // Toggle menu when hamburger icon is clicked
    menuIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        sideMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!sideMenu.contains(e.target) && !menuIcon.contains(e.target)) {
            sideMenu.classList.remove('active');
        }
    });

    // Prevent form submission (for demo purposes)
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
    });
});
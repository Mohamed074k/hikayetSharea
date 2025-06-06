// Menu functionality
const menuButton = document.getElementById('menuButton');
const closeMenu = document.getElementById('closeMenu');
const sideMenu = document.getElementById('sideMenu');

// Create menu overlay
const menuOverlay = document.createElement('div');
menuOverlay.className = 'menu-overlay';
document.body.appendChild(menuOverlay);

// Toggle menu function
function toggleMenu() {
    sideMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = sideMenu.classList.contains('active') ? 'hidden' : 'auto';
}

// Open menu
menuButton.addEventListener('click', toggleMenu);

// Close menu
closeMenu.addEventListener('click', toggleMenu);

// Close menu when clicking overlay
menuOverlay.addEventListener('click', toggleMenu);

// Search functionality
// const searchButton = document.getElementById('searchButton');
// const closeSearch = document.getElementById('closeSearch');
// const searchOverlay = document.getElementById('searchOverlay');

// searchButton.addEventListener('click', () => {
//     searchOverlay.classList.add('active');
//     document.body.style.overflow = 'hidden';
// });

// closeSearch.addEventListener('click', () => {
//     searchOverlay.classList.remove('active');
//     document.body.style.overflow = 'auto';
// });

// // Close search when clicking outside the search box
// searchOverlay.addEventListener('click', (e) => {
//     if (e.target === searchOverlay) {
//         searchOverlay.classList.remove('active');
//         document.body.style.overflow = 'auto';
//     }
// });

// Footer Links Functionality
document.addEventListener('DOMContentLoaded', function() {
    const footerLinks = document.querySelectorAll('.footer-link-btn');

    footerLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Toggle active class on button
            this.classList.toggle('active');
            
            // Toggle active class on items container
            const itemsContainer = this.nextElementSibling;
            itemsContainer.classList.toggle('active');
            
            // Close other open sections
            footerLinks.forEach(otherLink => {
                if (otherLink !== this) {
                    otherLink.classList.remove('active');
                    otherLink.nextElementSibling.classList.remove('active');
                }
            });
        });
    });
});

// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('.faq-btn');

    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle active class on button
            this.classList.toggle('active');
            
            // Toggle active class on answer
            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
            
            // Close other open answers
            faqButtons.forEach(otherButton => {
                if (otherButton !== this) {
                    otherButton.classList.remove('active');
                    otherButton.nextElementSibling.classList.remove('active');
                }
            });
        });
    });
}); 
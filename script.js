// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const drawer = document.getElementById('drawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const drawerClose = document.getElementById('drawerClose');
const shareButton = document.getElementById('shareButton');
const shareMenu = document.getElementById('shareMenu');

// Drawer Menu Toggle
menuToggle.addEventListener('click', () => {
    drawer.classList.add('active');
    drawerBackdrop.classList.add('active');
});

drawerClose.addEventListener('click', closeDrawer);
drawerBackdrop.addEventListener('click', closeDrawer);

function closeDrawer() {
    drawer.classList.remove('active');
    drawerBackdrop.classList.remove('active');
}

// Share Widget Toggle
shareButton.addEventListener('click', () => {
    shareMenu.classList.toggle('active');
});

// Close share menu when clicking outside
document.addEventListener('click', (e) => {
    if (!shareButton.contains(e.target) && !shareMenu.contains(e.target)) {
        shareMenu.classList.remove('active');
    }
});

// Progress Bars Animation
function animateProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');
    
    progressFills.forEach(fill => {
        const progress = fill.getAttribute('data-progress');
        setTimeout(() => {
            fill.style.width = progress + '%';
        }, 200);
    });
}

// Initialize progress bars when page loads
window.addEventListener('load', animateProgressBars);

// Card interactions
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDrawer();
        shareMenu.classList.remove('active');
    }
});

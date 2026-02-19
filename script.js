const track = document.getElementById('track');
let slides = document.querySelectorAll('.slide');
let index = 0;

// Clone the first slide and add it to the end for the loop effect
const firstSlideClone = slides[0].cloneNode(true);
track.appendChild(firstSlideClone);

// Re-query slides to include the new clone
slides = document.querySelectorAll('.slide');

function nextSlide() {
    index++;
    
    // Enable smooth transition for the move
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${index * 100}%)`;

    // Wait for the transition to finish
    track.addEventListener('transitionend', () => {
        // If we are on the cloned last slide
        if (index === slides.length - 1) {
            // Disable transition to jump instantly
            track.style.transition = 'none';
            // Reset index to the real first slide (index 0)
            index = 0;
            // Jump instantly
            track.style.transform = `translateX(0%)`;
        }
    }, { once: true });
}

// Run every 5 seconds
setInterval(nextSlide, 6000);




const hamburgerMenu = document.querySelector('.hamburger');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('menu-overlay');
const navMenuLinks = document.querySelectorAll('.nav-links a');

// Function to toggle the menu open and closed state
function toggleMenu() {
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('open');
}

// Event Listeners for opening and closing
hamburgerMenu.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu); // Closes menu if user clicks outside of it

// Close the menu automatically when a link is clicked
navMenuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});



// --- Scroll Fade-In Observer ---
const faders = document.querySelectorAll('.fade-in');

// Settings for the observer
const appearOptions = {
    threshold: 0.15, // Triggers when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px" // Triggers slightly before it hits the very bottom of the screen
};

// Create the observer
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return; // Do nothing if it's not on screen yet
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // Stop observing once it has appeared so it doesn't animate again on scroll up
        }
    });
}, appearOptions);

// Tell the observer to watch all elements with the .fade-in class
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
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

setInterval(nextSlide, 68000);

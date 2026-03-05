const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return; // Do nothing if it's not on screen yet
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');

            const iframe = entry.target.querySelector('iframe');
            if (iframe) {
                setTimeout(() => {
                    iframe.src = iframe.src;
                }, 600); // Match your transition duration (0.6s)
            }

            observer.unobserve(entry.target);
        }
    });
});
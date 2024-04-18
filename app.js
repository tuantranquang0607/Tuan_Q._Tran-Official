document.addEventListener('DOMContentLoaded', function () {
    // Text writing animation
    const typed = new Typed(".text", {
        strings: ["a Game developer 🎮", "a Web developer 💻", "a digital artist 🎨"],
        typeSpeed: 55,
        backSpeed: 25,
        backDelay: 75,
        loop: true
    });

    // Function to play the pronunciation audio
    function playPronunciation() {
        const pronunciationAudio = document.getElementById('pronunciationAudio');
        pronunciationAudio.play();
    };

    const speakerButton = document.querySelector('.speaker');
    speakerButton.addEventListener('click', playPronunciation);
});

// Disable scrolling when checkbox is checked
document.getElementById('check').addEventListener('change', function(e) {
    if (e.target.checked) {
        document.body.style.overflow = 'hidden';  // Disable scrolling
    } else {
        document.body.style.overflow = 'auto';  // Enable scrolling
    }
});

// Get all the links in the navigation menu
const navLinks = document.querySelectorAll('.nav__content ul li a');

// Add a click event listener to each link
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        // Uncheck the checkbox to close the menu
        document.getElementById('check').checked = false;
    });
}

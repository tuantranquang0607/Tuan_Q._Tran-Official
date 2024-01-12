// Text writing animation
document.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed(".text", {
        strings: ["a Web developer!", "a Game developer!", "an UI designer!", "a digital artist!"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 50,
        loop: true
    });
});

// Function to play the pronunciation audio
function playPronunciation() {
    const pronunciationAudio = document.getElementById('pronunciationAudio');
    pronunciationAudio.play();
}

const playButton = document.getElementById('playButton');
const pronunciationAudio = document.getElementById('pronunciationAudio');

playButton.addEventListener('click', playPronunciation);

// Funtion to toggle the menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


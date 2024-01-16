document.addEventListener('DOMContentLoaded', function () {
    // Text writing animation
    const typed = new Typed(".text", {
        strings: ["a Web developer 😗", "a Game developer 😎", "an UI designer 🤨", "a digital artist 🤔"],
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

    // Funtion to toggle the menu
    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    };

    const hamburgerIcon = document.querySelector(".hamburger-icon");
    hamburgerIcon.addEventListener('click', toggleMenu);

    // Function to scroll to the top of the page
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const upArrowLink = document.querySelector('.up-arrow');
    if (upArrowLink) {
        upArrowLink.addEventListener('click', function (event) {
            event.preventDefault();
            scrollToTop();
        });
    }
});










document.addEventListener('DOMContentLoaded', function () {
    // Text writing animation
    const typed = new Typed(".text", {
        strings: ["a Game Developer 😎", "a Web Developer 😗", "a Digital Artist 🤔"],
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

    // Function to disable scrolling
    function disableScroll() {
        document.body.style.overflow = 'hidden';
    }

    // Function to enable scrolling
    function enableScroll() {
        document.body.style.overflow = 'auto';
    }

    // Function to close the menu after user clicks on a link
    document.querySelectorAll('nav ul a').forEach(item => {
        item.addEventListener('click', event => {
            document.querySelector('#click').checked = false;
            enableScroll(); // Enable scrolling when menu is closed
        });
    });

    // Assuming '#click' is the id of your menu checkbox
    document.querySelector('#click').addEventListener('change', (event) => {
        if (event.target.checked) {
            disableScroll(); // Disable scrolling when menu is open
        } else {
            enableScroll(); // Enable scrolling when menu is closed
        }
    });
});










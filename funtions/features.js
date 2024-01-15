document.addEventListener('DOMContentLoaded', function () {
    // Text writing animation
    const typed = new Typed(".text", {
        strings: ["a Web developer!", "a Game developer!", "an UI designer!", "a digital artist!"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 50,
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

    // Function to shuffle the text
    function shuffleText() {
        const textElement = document.querySelector('.logo a');
        const text = textElement.textContent;
        const shuffledText = shuffleArray([...text]).join('');
        textElement.textContent = shuffledText;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
});










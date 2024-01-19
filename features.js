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

    // Funtion to close the menu after user clicks on a link
    document.querySelectorAll('nav ul a').forEach(item => {
        item.addEventListener('click', event => {
            document.querySelector('#click').checked = false;
        })
    })

    // Funtion to disable scroll when the menu is open
    document.querySelector('#click').addEventListener('change', function () {
        document.body.classList.toggle('no-scroll', this.checked);
    });
});










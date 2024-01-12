document.querySelector('.nav-bar .hamburger-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('active');
});

const typed = new Typed(".text", {
    strings: ["a Full-stack developer!", "a Game developer!", "an UI designer!", "a digital artist!"],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 50,
    loop: true
});

// Function to play the pronunciation audio
function playPronunciation() {
    const pronunciationAudio = document.getElementById('pronunciationAudio');
    pronunciationAudio.play();
}

const playButton = document.getElementById('playButton');
const pronunciationAudio = document.getElementById('pronunciationAudio');

playButton.addEventListener('click', playPronunciation);


// Function to handle the CV download
function downloadCV() {
    const cvPath = '../asset/Q. Tuan Tran - Resume.pdf';
    const downloadLink = document.createElement('a');

    downloadLink.href = cvPath;
    downloadLink.download = 'Q. Tuan Tran - Resume.pdf';
    downloadLink.click();

    document.body.appendChild(downloadLink);
    document.body.removeChild(downloadLink);
}

const downloadCVButton = document.querySelector('.btn-container .btn-color-2');
downloadCVButton.addEventListener('click', downloadCV);


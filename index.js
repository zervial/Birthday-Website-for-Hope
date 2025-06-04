let mainImage = document.getElementById('book');
let displayImage = 'book';
let messageText = document.getElementById('messageText');
let whyText = document.getElementById('whyText');

const homeBtn = document.getElementById('homebtn');
const messageBtn = document.getElementById('messagebtn');
const whyBtn = document.getElementById('whybtn');
const closedBook = 'Pictures/Book.png';
const openBook = 'Pictures/openBook.png';
const closedEnvelope = 'Pictures/closedEnvelope.png';
const openEnvelope = 'Pictures/openEnvelope.png';

const clickSound = new Audio('Sounds/Paper.mp3');

const lofiAudio = new Audio('Music/Lofi.mp3');
lofiAudio.loop = true; // Make sure it keeps playing

let homeButtonClicked = true;
let messageButtonClicked = false;
let whyButtonClicked = false;

let envelopeOpened = false;

let musicStarted = false;

function startMusicOnce() {
  if (!musicStarted) {
    lofiAudio.play();
    musicStarted = true;
  }
}

lofiAudio.volume = 0.1  ; // 20% volume (range is from 0.0 to 1.0)

startMusicOnce();

mainImage.addEventListener('click', () => {
  if (displayImage === 'book') {
    mainImage.src = mainImage.src.includes(closedBook) ? openBook : closedBook;

    } else if (displayImage === 'envelope' && !envelopeOpened) {
    envelopeOpened = true;

    // Show open envelope image
    mainImage.src = openEnvelope;


    // Wait before showing the message text
    setTimeout(() => {
      mainImage.style.display = 'none';
      messageText.style.display = 'block';
    }, 2000);
  }
});


homeBtn.addEventListener('click', () => {
  clickSound.play();
  whyText.style.display = 'none';
  homeButtonClicked = true
  messageButtonClicked = false;
  whyButtonClicked = false;
  messageText.style.display = 'none';
  displayImage = 'book';
  mainImage.style.display = "";
  mainImage.src = 'Pictures/Book.png';
});

messageBtn.addEventListener('click', () => {
  clickSound.play();
  whyText.style.display = 'none';
  messageButtonClicked = true;
  homeButtonClicked = false;
  whyButtonClicked = false;
  displayImage = 'envelope';
  messageText.style.display = 'none';
  mainImage.style.display = "";
  mainImage.src = 'Pictures/closedEnvelope.png';
  envelopeOpened = false;
});

whyBtn.addEventListener('click', () => {
  clickSound.play();
  whyButtonClicked = true;
  homeButtonClicked = false;
  messageButtonClicked = false;
  mainImage.style.display = "none";
  messageText.style.display = 'none';
  messageText.classList.remove('visible');
  messageText.classList.add('hidden');
  whyText.style.display = 'block';
});
console.log(homeButtonClicked, messageButtonClicked, whyButtonClicked);
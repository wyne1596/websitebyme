const sidebar = document.getElementById('sidebar');
const hmbrgr = document.getElementById('hmbrgr');
const start = document.getElementById('start');
const backward = document.getElementById('backward');
const forward = document.getElementById('forward');
const songs = ['AfterTheStorm.mp3', 'LoveMeNot.mp3'];
let currentAudio = null;
let currentAudioIndex = 0;

if (hmbrgr) {
    hmbrgr.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
}

document.addEventListener('click', function(event) {
    if (sidebar && !sidebar.contains(event.target) && !hmbrgr.contains(event.target) && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

//Music Player Logic

if (start) {
    start.addEventListener('click', function() {
        if (currentAudio && !currentAudio.paused) {
            currentAudio.pause();
            start.innerHTML = '&#x23f5;';
        } else if (currentAudio && currentAudio.paused) {
            currentAudio.play();
            start.innerHTML = '&#x23f8;';
        } else {
            currentIndex = Math.floor(Math.random() * songs.length);
            playSong(currentIndex);
        }

    });

    backward.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = songs.length - 1;
        }
        playSong(currentIndex);
    });

    forward.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= songs.length) {
            currentIndex = 0;
        }
        playSong(currentIndex);
    });
}

function playSong(index) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio('music/' + songs[index]);
    currentAudio.play();
    start.innerHTML = '&#x23f8;';

    currentAudio.addEventListener('ended', function() {
        start.innerHTML = '&#x23f5;';
        currentAudio = null;
    });
}

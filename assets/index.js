import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'


const plugins = [ new AutoPlay() ]
const video = document.querySelector('video');
const player = new MediaPlayer({ el: video , plugins:plugins});

const button = document.querySelector('.play');
button.onclick = () => player.togglePlay();
const muteToggle = document.querySelector(".toggle-mute");
muteToggle.onclick = () => player.toggleMute();
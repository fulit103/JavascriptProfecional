import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const plugins = [new AutoPlay(), new AutoPause()]
const video = document.querySelector('video')
const player = new MediaPlayer({ el: video, plugins: plugins })

const button = document.querySelector('.play')
button.onclick = () => player.togglePlay()
const muteToggle = document.querySelector('.toggle-mute')
muteToggle.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message)
  })
}
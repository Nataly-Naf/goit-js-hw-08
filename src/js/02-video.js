import VimeoPlayer from '@vimeo/player'
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe')
const player = new VimeoPlayer(iframe);

player.on('timeupdate', throttle(timeFunction, 1000)) 
 
function timeFunction(data) {
    let currTime = data.seconds;
    localStorage.setItem('player-current-time', currTime)
           
}
const pausedTime = localStorage.getItem('player-current-time') ?? 0
    console.log(localStorage.getItem('player-current-time'))
    player.setCurrentTime(pausedTime)




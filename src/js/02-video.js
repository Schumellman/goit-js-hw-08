import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
     localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
}

const currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));

player.setCurrentTime(currentTime);
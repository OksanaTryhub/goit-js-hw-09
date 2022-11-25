import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
 
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
        console.log('The time was 0 or greater than the video’s duration');
            break;
    }
});
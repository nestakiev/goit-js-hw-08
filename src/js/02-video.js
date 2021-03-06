import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
    const player = new Vimeo(iframe);
    const timeToContinue = localStorage.getItem('videoplayer-current-time');
    
    if(timeToContinue) {
    player.setCurrentTime(timeToContinue)
    }

    player.on('timeupdate', throttle(onPlay, 1000));

    function onPlay(data) {
        const currentTime = data.seconds;
        localStorage.setItem('videoplayer-current-time', currentTime);
    };

    
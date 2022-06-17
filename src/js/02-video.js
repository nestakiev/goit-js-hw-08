import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
    const player = new Vimeo(iframe);

    player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {
        if (!seconds) {
            return;
        }
    })

    player.on('timeupdate', throttle(onPlay, 1000));

    function onPlay(data) {
        const currentTime = data.seconds;
        localStorage.setItem('videoplayer-current-time', currentTime);
    };

    
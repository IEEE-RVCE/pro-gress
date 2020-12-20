import { useEffect, useState } from 'react';

export default function Elevator() {
    const [playMusic, setPlayMusic] = useState(false);
    const [audio, setPlayer] = useState<HTMLAudioElement>(null);
    useEffect(() => {
        //escape the ssr
        if (audio === null) {
            const audioPlayer = new Audio('/lfe.mp3');
            //loop it - if its done, restart :)
            audioPlayer.addEventListener(
                'ended',
                function (ev) {
                    this.currentTime = 0;
                    this.play();
                },
                false
            );
            setPlayer(audioPlayer);
        }
    }, [audio]);
    
    /**
     * flip the handle every time its clicked
     */
    const handle = () => {
        setPlayMusic(!playMusic);
    };

    useEffect(() => {
        if (playMusic) {
            audio?.play();
        } else {
            audio?.pause();
        }
    }, [playMusic]);

    return (
        <>
            <svg
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="1em"
                // style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 20 20"
                onClick={handle}
            >
                <desc>[long description]</desc>
                <path
                    className=""
                    d="M5 7H1v6h4l5 5V2L5 7zm11.36 9.36l-1.41-1.41a6.98 6.98 0 0 0 0-9.9l1.41-1.41a8.97 8.97 0 0 1 0 12.72zm-2.82-2.82l-1.42-1.42a3 3 0 0 0 0-4.24l1.42-1.42a4.98 4.98 0 0 1 0 7.08z"
                    fill={playMusic ? '#bdff94' : 'rgb(185,185,185)'}
                />
            </svg>
            
            <img title="Title Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 3.0
http://creativecommons.org/licenses/by/3.0/"src="/Info-Button.svg" style={{height:"1rem",paddingLeft:"0.5rem"}}/>
        </>
    );
}

import React, {useEffect, useRef} from 'react';

function Hero() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 1.8
    }, []);

    return (
        <section id={"hero"}>
            <div>
                <h1>MacBook Pro</h1>
                <img
                    src={"/title.png"}
                    alt={"MacBook Pro"}
                />
                <video ref={videoRef} src={"/videos/hero.mp4"} autoPlay playsInline muted />
                <button>
                    Buy
                </button>

                <p>
                    From $1599 or $133/mo for 12 months
                </p>
            </div>
        </section>
    );
}

export default Hero;
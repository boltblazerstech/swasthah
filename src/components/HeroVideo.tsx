import SampleVideo from "../assets/hero_video3.mp4";
import { forwardRef, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const HeroVideo = forwardRef<HTMLElement>((props, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    const toggleSound = () => {
        if (!videoRef.current) return;

        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    return (
        <section
            ref={ref}
            id="hero"
            className="relative w-full h-screen overflow-hidden bg-brand-green/10"
        >
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
            >
                <source src={SampleVideo} type="video/mp4" />
            </video>

            {/* Controls */}
            <div className="absolute bottom-6 right-6 flex gap-3 z-10">

                {/* Play / Pause */}
                <button
                    onClick={togglePlay}
                    className="bg-black/60 backdrop-blur text-white p-3 rounded-full hover:bg-black/80 transition"
                >
                    {isPlaying ? <Pause size={22} /> : <Play size={22} />}
                </button>

                {/* Mute / Unmute */}
                <button
                    onClick={toggleSound}
                    className="bg-black/60 backdrop-blur text-white p-3 rounded-full hover:bg-black/80 transition"
                >
                    {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
                </button>

            </div>
        </section>
    );
});

export default HeroVideo;
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const videoContent = {
  videoUrl: "https://occ-0-64-58.1.nflxso.net/so/soa3/474/1670834311187892225.mp4?v=1&e=1756874364&t=iQaZ5otz0gPitPpfKv0oDkZ-Lzw",
  posterUrl: "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABcYXtqoBkJwXvskqG1ByHZscjJWWEVXXM-3Tn9vxbZOezlqRWTGJNWO-skhbG3pVNxykW8IpQgnK5cLn0Yg-OlgIU_PqSpjzEo_F.webp?r=3ec",
};

export default function PaddedCurvedVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const bgVideo = bgVideoRef.current;
    
    if (video && bgVideo) {
      if (isPlaying) {
        video.play().catch(error => {
          console.error("Video play failed:", error);
          setIsPlaying(false);
        });
        bgVideo.play().catch(error => {
          console.error("Background video play failed:", error);
        });
      } else {
        video.pause();
        bgVideo.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(prev => !prev);
  const toggleMute = () => setIsMuted(prev => !prev);

  return (
    // Main full-screen container with the black background
    <div className="relative w-full min-h-screen bg-black text-white flex items-center justify-center overflow-x-hidden">

      {/* Full-screen Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={bgVideoRef}
          src={videoContent.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            filter: 'blur(20px) brightness(0.3) saturate(1.2)',
            transform: 'scale(1.1)',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main Video Player with rounded corners */}
      <div className="relative z-10 w-full max-w-[90vw] h-[80vh] rounded-2xl overflow-hidden shadow-2xl">

        <div 
          className="relative w-full h-full"
          style={{
            maskImage: 'radial-gradient(101% 10% at 50% 102%, transparent 50%, white 52%)',
            WebkitMaskImage: 'radial-gradient(101% 10% at 50% 102%, transparent 50%, white 52%)',
          }}
        >
          <video
            ref={videoRef}
            src={videoContent.videoUrl}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        {/* Playback Controls (now inside the main video player container) */}
        <div className="absolute bottom-16 right-16 z-30 flex space-x-4">
          {/* Play / Pause */}
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors border border-white/20 shadow-lg"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Pause className="w-7 h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Play className="w-7 h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Volume */}
          <motion.button
            onClick={toggleMute}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors border border-white/20 shadow-lg"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            <AnimatePresence mode="wait">
              {isMuted ? (
                <motion.div
                  key="muted"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <VolumeX className="w-7 h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="unmuted"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Volume2 className="w-7 h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

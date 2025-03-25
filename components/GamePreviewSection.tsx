"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function GamePreviewSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div id="demo" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Game Preview Content */}
          <div className="flex-1">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16 space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Game Preview
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Experience the future of blockchain gaming with our
                revolutionary pinball mechanics
              </p>
            </motion.div>

            {/* Video Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative max-w-5xl mx-auto"
            >
              {/* Main Container with Gradient Effects */}
              <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
                {/* Glow Effects */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />

                {/* Inner Container */}
                <div className="relative bg-black/90 rounded-2xl">
                  {/* Corner Accents */}
                  <div className="absolute -top-2 -left-2 w-16 h-16">
                    <div className="w-full h-[2px] bg-gradient-to-r from-cyan-500 to-transparent" />
                    <div className="h-full w-[2px] bg-gradient-to-b from-cyan-500 to-transparent" />
                    <div className="absolute top-0 left-0 w-3 h-3 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-16 h-16">
                    <div className="w-full h-[2px] bg-gradient-to-l from-purple-500 to-transparent" />
                    <div className="absolute right-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-transparent" />
                    <div className="absolute top-0 right-0 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-16 h-16">
                    <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-transparent" />
                    <div className="absolute left-0 h-full w-[2px] bg-gradient-to-t from-blue-500 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16">
                    <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-l from-purple-500 to-transparent" />
                    <div className="absolute right-0 h-full w-[2px] bg-gradient-to-t from-purple-500 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
                  </div>

                  {/* Video Player */}
                  <div className="relative rounded-xl overflow-hidden aspect-video">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      loop
                      playsInline
                      src="https://cdn-cf-east.streamable.com/video/mp4/86ruxu.mp4?Expires=1736082994892&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=VdPn5iHmr~pMXwSyJlLtnqq14PtjNGpIDQ3x52B65kVj3oq3LiNKc2hEzrlhZx69yoJ29YvhterwxcYAFhIFkj-BqRc6hEWbq2TgvEdIh5P5JNaPGR1T0hGFg~9ycZuse71Ii8kQ2KsRU5-9XeUYZt0i36lus6VDEcJOdSDeBUU2INcLnn-wjaVgGDUfiaCSys22w6KYTY3kGFMyUdupMmEy2YFSbkuK6xZhoE3R0gwpKTAPf~Sx2g8xhBj1nnqfDCoUPdK7ypTfnO9jP72nwd4ba8QoybnYOywHZ3RBnClgkVNFBFbSMbqqWWvL8nguOUQkn-eNwkYZuAP5NjQcrQ__"
                    />

                    {/* Play Button Overlay */}
                    {!isPlaying && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                      >
                        <motion.button
                          onClick={togglePlay}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="group relative cursor-pointer"
                        >
                          {/* Button Glow */}
                          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-purple-500/50 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300" />

                          {/* Button Design */}
                          <div className="relative p-[2px] rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
                            <div className="relative w-20 h-20 rounded-full bg-black/90 flex items-center justify-center group-hover:bg-black/70 transition-colors duration-300">
                              <svg
                                className="w-10 h-10 text-white group-hover:text-cyan-400 transition-colors duration-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </motion.button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Token Name */}
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                SOLANA PINBALL
              </span>
              <span className="block text-3xl md:text-4xl mt-2 text-gray-300">
                Play-to-Earn Gaming
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
              Experience the future of gaming with PINBALL. Compete, earn
              rewards, and join a thriving community of players in the
              blockchain gaming revolution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Play Game Button */}
              <Link
                href="https://pinball-frontend.vercel.app"
                className="group relative px-8 py-3 overflow-hidden rounded-full inline-block bg-gradient-to-r from-purple-600 to-blue-600"
              >
                <span className="relative z-10 text-white font-semibold text-lg">
                  Play Game
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>

              {/* Buy Token Button */}
              <Link
                href="#buy"
                className="group relative px-8 py-3 overflow-hidden rounded-full inline-block bg-transparent"
              >
                {/* Background gradient with improved opacity */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                {/* Glowing border effect */}
                <span className="absolute inset-0 border border-cyan-500/70 rounded-full shadow-[0_0_8px_1px] shadow-cyan-500/30 group-hover:shadow-cyan-400/50 transition-all duration-300" />
                {/* Text with subtle hover effect */}
                <span className="relative z-10 text-white font-semibold text-lg group-hover:text-cyan-50 transition-colors duration-300">
                  Buy Token
                </span>
                {/* Animated fill effect on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 delay-100" />
              </Link>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[600px]"
          >
            <div className="relative w-full h-full flex flex-col md:flex-row gap-8">
              {/* Game Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex-1 relative group w-full"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-50 blur group-hover:opacity-75 transition-opacity duration-300" />

                {/* Main container */}
                <div className="relative h-full bg-black/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-2xl" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple-500/50 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-500/50 rounded-bl-2xl" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/50 rounded-br-2xl" />

                  {/* Game Image */}
                  <div className="relative h-full p-4">
                    <Image
                      src="/game.png"
                      alt="Pinball Game Preview"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Leaderboard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex-1 relative group w-full"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl opacity-50 blur group-hover:opacity-75 transition-opacity duration-300" />

                {/* Main container */}
                <div className="relative h-full bg-black/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
                  {/* Title Bar */}
                  <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-b border-white/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold tracking-wider">
                      LEADERBOARD
                    </span>
                  </div>

                  {/* Leaderboard Image */}
                  <div className="relative h-full pt-12 p-4">
                    <Image
                      src="/leaderboard.png"
                      alt="Game Leaderboard"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

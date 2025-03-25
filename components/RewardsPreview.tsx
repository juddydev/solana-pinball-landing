"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SolanaLogo = () => (
  <svg
    viewBox="0 0 36 36"
    width="36"
    height="36"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        x1="90.737%"
        y1="34.776%"
        x2="35.509%"
        y2="55.415%"
        id="a"
      >
        <stop stopColor="#00FFA3" offset="0%" />
        <stop stopColor="#DC1FFF" offset="100%" />
      </linearGradient>
      <linearGradient x1="66.588%" y1="43.8%" x2="11.36%" y2="64.439%" id="b">
        <stop stopColor="#00FFA3" offset="0%" />
        <stop stopColor="#DC1FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="78.586%"
        y1="39.317%"
        x2="23.358%"
        y2="59.956%"
        id="c"
      >
        <stop stopColor="#00FFA3" offset="0%" />
        <stop stopColor="#DC1FFF" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="nonzero">
      <circle fill="#181E33" cx="18" cy="18" r="18" />
      <path
        d="M9.9 23.355a.785.785 0 0 1 .554-.23h19.153c.35 0 .525.423.277.67l-3.783 3.784a.785.785 0 0 1-.555.23H6.393a.392.392 0 0 1-.277-.67l3.783-3.784z"
        fill="url(#a)"
      />
      <path
        d="M9.9 9.23c.15-.146.35-.23.554-.23h19.153c.35 0 .525.422.277.67l-3.783 3.783a.785.785 0 0 1-.555.23H6.393a.392.392 0 0 1-.277-.67L9.899 9.229z"
        fill="url(#b)"
      />
      <path
        d="M26.1 16.247a.785.785 0 0 0-.554-.23H6.393a.392.392 0 0 0-.277.67l3.783 3.784c.145.145.344.23.555.23h19.153c.35 0 .525-.423.277-.67l-3.783-3.784z"
        fill="url(#c)"
      />
    </g>
  </svg>
);

interface RewardsPreviewProps {
  className?: string;
  todayRewards?: number;
  totalEarned?: number;
  solPrice?: number;
  priceChange?: number;
  percentChange?: number;
}

export default function RewardsPreview({
  className = "",
  todayRewards = 0.458,
  totalEarned = 12.547,
  solPrice = 125.84,
  priceChange = 2.65,
  percentChange = 32.4,
}: RewardsPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button - Only visible on mobile */}
      {isMobile && (
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-4 right-4 z-50 bg-black/80 backdrop-blur-lg rounded-full p-3 border border-white/10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <SolanaLogo />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </div>
        </motion.button>
      )}

      {/* Rewards Preview Panel */}
      <AnimatePresence>
        {/* Show always on desktop, only when isOpen on mobile */}
        {(!isMobile || isOpen) && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed md:bottom-8 md:right-8 bottom-16 right-4 z-40 ${className}`}
          >
            <div className="w-[300px] relative">
              {/* Mobile Close Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute -top-2 -right-2 md:hidden z-50 bg-black/80 backdrop-blur-lg rounded-full p-1.5 border border-white/10"
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white/70"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>

              {/* Main Content */}
              <div className="relative bg-black/80 backdrop-blur-lg rounded-2xl border border-white/10 p-4">
                {/* Header with Price Stats */}
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-bold">
                      Daily Rewards
                    </span>
                    <div className="flex items-center gap-2">
                      <SolanaLogo />
                      <span className="text-purple-400 font-mono">SOL</span>
                    </div>
                  </div>

                  {/* Price Information */}
                  <div className="flex items-center justify-between px-1">
                    <div className="text-lg font-mono font-bold text-white">
                      ${solPrice.toFixed(2)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-medium ${
                          priceChange >= 0 ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {priceChange >= 0 ? "+" : ""}
                        {priceChange.toFixed(2)}$
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          percentChange >= 0 ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {percentChange >= 0 ? "+" : ""}
                        {percentChange.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Animated Tokens */}
                <div className="relative h-[100px] overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute left-1/2 -translate-x-1/2"
                      initial={{ y: -50, opacity: 0 }}
                      animate={{
                        y: [null, 100],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.8,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-0.5">
                        <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                            +{(Math.random() * 0.1).toFixed(3)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats with USD Values */}
                <div className="mt-2 flex justify-between items-center border-t border-white/10 pt-3">
                  <div>
                    <div className="text-sm text-gray-400">
                      Today&apos;s Rewards
                    </div>
                    <div className="flex flex-col">
                      <div className="text-lg font-bold text-green-400">
                        +{todayRewards} SOL
                      </div>
                      <div className="text-sm text-green-400/80">
                        +${(todayRewards * solPrice).toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Total Earned</div>
                    <div className="flex flex-col">
                      <div className="text-lg font-bold text-purple-400">
                        {totalEarned} SOL
                      </div>
                      <div className="text-sm text-purple-400/80">
                        ${(totalEarned * solPrice).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";
import { motion } from "framer-motion";
import { Gamepad2, Trophy, Coins } from "lucide-react";

const features = [
  {
    title: "Play & Earn",
    description:
      "Experience thrilling pinball gameplay while earning rewards. Master the game mechanics and compete for high scores.",
    icon: <Gamepad2 className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    title: "Global Leaderboard",
    description:
      "Compete with players worldwide on our real-time leaderboard. Track your progress and climb the ranks to become the ultimate champion.",
    icon: <Trophy className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    title: "Daily Rewards",
    description:
      "Earn tokens daily based on your performance. Top players receive exclusive rewards and special bonuses from the prize pool.",
    icon: <Coins className="w-8 h-8" strokeWidth={1.5} />,
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Game Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dive into the future of gaming with our innovative play-to-earn
            pinball experience
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Card Background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-50 blur group-hover:opacity-75 transition duration-300" />

              {/* Card Content */}
              <div className="relative h-full bg-black/90 rounded-2xl p-8 flex flex-col items-center text-center space-y-6">
                {/* Icon */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 text-cyan-400 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

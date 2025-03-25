"use client";
import { motion } from "framer-motion";

export default function CommunitySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Join Our Community
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Be part of our growing community and stay updated with the latest
              news and announcements
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Telegram Button */}
            <a
              href="#telegram"
              className="group relative px-8 py-3 overflow-hidden rounded-full inline-block"
            >
              {/* Background with gradient */}
              <span className="absolute inset-0 bg-[#2AABEE] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <span className="relative z-10 flex items-center gap-2 text-white font-semibold text-lg">
                Join Telegram
              </span>
            </a>

            {/* X (Twitter) Button */}
            <a
              href="#x"
              className="group relative px-8 py-1 overflow-hidden rounded-full inline-block border border-white/10"
            >
              {/* Background with gradient */}
              <span className="absolute inset-0 bg-black opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <span className="relative z-10 flex items-center gap-2 text-white font-semibold text-lg rounded-full px-4 py-2">
                Follow on X
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

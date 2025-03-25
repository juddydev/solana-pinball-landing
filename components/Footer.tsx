"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-8"
        >
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            SOLANA PINBALL
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center">
            <p>© {new Date().getFullYear()} Pinball. All rights reserved.</p>
            <p className="mt-1">Play-to-Earn Blockchain Gaming Platform</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

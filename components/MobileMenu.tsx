"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.2,
              ease: "easeOut",
            }}
            className="fixed right-0 top-0 bottom-0 w-[300px] bg-black/95 border-l border-gray-800 z-50"
          >
            {/* Menu Container */}
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-end h-20 border-b border-gray-800">
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-6 px-6">
                <nav className="flex flex-col space-y-6">
                  <Link
                    href="#demo"
                    onClick={onClose}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Game Demo
                  </Link>
                  <Link
                    href="#features"
                    onClick={onClose}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Features
                  </Link>
                  <Link
                    href="#roadmap"
                    onClick={onClose}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Roadmap
                  </Link>
                </nav>
              </div>

              {/* CTA Button */}
              <div className="p-6 border-t border-gray-800">
                <Link
                  href="#community"
                  onClick={onClose}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-center text-white font-semibold rounded-full"
                >
                  Join Community
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

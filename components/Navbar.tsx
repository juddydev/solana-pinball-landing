import Link from "next/link";
import { motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Game Demo", href: "#demo" },
  { label: "Features", href: "#features" },
  { label: "Roadmap", href: "#roadmap" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

export default function Navbar() {
  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="show"
      className="hidden md:flex items-center gap-8"
    >
      {navItems.map((navItem) => (
        <motion.div key={navItem.label} variants={itemAnimation}>
          <Link
            href={navItem.href}
            className="relative px-3 py-1.5 text-gray-300 font-medium group"
          >
            <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
              {navItem.label}
            </span>
            {/* Cyber border effect */}
            <span className="absolute inset-0 border border-transparent group-hover:border-cyan-500/50 group-hover:glow-cyan-500/30 rounded transition-all duration-300" />
            {/* Tech background effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-950/0 via-cyan-900/0 to-cyan-950/0 group-hover:from-cyan-950/20 group-hover:via-cyan-900/20 group-hover:to-cyan-950/20 rounded transition-all duration-300" />
            {/* Bottom line effect */}
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </Link>
        </motion.div>
      ))}
      <motion.div variants={itemAnimation} className="relative">
        <div className="relative isolate">
          <Link
            href="#community"
            className="group relative px-6 py-2 overflow-hidden rounded-full inline-block"
          >
            {/* Background gradient */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:opacity-90" />

            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            {/* Border glow */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-400/50 to-blue-400/50 blur-md" />

            {/* Text */}
            <span className="relative text-white font-semibold z-10">
              Join Community
            </span>
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}

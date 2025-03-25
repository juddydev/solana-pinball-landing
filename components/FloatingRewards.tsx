"use client";
import { motion } from "framer-motion";
import RewardsPreview from "./RewardsPreview";

export default function FloatingRewards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.div transition={{ duration: 0.2 }}>
        <RewardsPreview />
      </motion.div>
    </motion.div>
  );
}

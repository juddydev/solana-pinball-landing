"use client";
import { motion } from "framer-motion";
import { Check, Coins, Lock, Rocket } from "lucide-react";

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Project Launch",
    status: "completed",
    date: "Q1 2025",
    items: [
      "Token Smart Contract Development",
      "Website Launch",
      "Beta Testing Program",
    ],
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    phase: "Phase 2",
    title: "Community Building and Token Launch",
    status: "upcoming",
    date: "Q2 2025",
    items: [
      "Community Building",
      "Initial Marketing Campaign",
      "Token Pre-sale",
      "Token Launch",
    ],
    icon: <Coins className="w-6 h-6" />,
  },
  {
    phase: "Phase 3",
    title: "Expansion",
    status: "upcoming",
    date: "Q3 2025",
    items: [
      "Community Feedback Integration",
      "Advanced rewards system",
      "Official game launch",
    ],
    icon: <Rocket className="w-6 h-6" />,
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-32 overflow-hidden">
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
            Roadmap
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Our journey to revolutionize blockchain gaming
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Progress Line - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block" />

          {/* Mobile Progress Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 md:hidden" />

          {/* Roadmap Items */}
          <div className="space-y-12 md:space-y-24">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-start md:items-center ${
                  index % 2 === 0
                    ? "md:flex-row flex-row"
                    : "md:flex-row-reverse flex-row"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`w-full md:w-1/2 pl-12 sm:pl-16 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div className="relative group">
                    {/* Card Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-50 blur group-hover:opacity-75 transition duration-300" />

                    {/* Card Content */}
                    <div className="relative h-full bg-black/90 rounded-2xl p-4 sm:p-6 md:p-8">
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div className="p-1.5 md:p-2 rounded-lg bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white">
                            {item.title}
                          </h3>
                          <p className="text-cyan-400 text-sm md:text-base">
                            {item.date}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2 md:space-y-3">
                        {item.items.map((listItem, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 md:gap-3 text-gray-400 text-sm md:text-base"
                          >
                            {item.status === "completed" ? (
                              <Check className="w-4 h-4 text-cyan-400" />
                            ) : (
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            )}
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div
                  className={`absolute ${
                    // Mobile positioning
                    "left-4 sm:left-8 md:left-1/2"
                  } transform -translate-x-1/2 flex items-center justify-center`}
                >
                  <div
                    className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center
                    ${
                      item.status === "completed"
                        ? "bg-cyan-500"
                        : item.status === "current"
                        ? "bg-blue-500"
                        : "bg-purple-500/50"
                    }`}
                  >
                    {item.status === "completed" ? (
                      <Check className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    ) : item.status === "current" ? (
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full" />
                    ) : (
                      <Lock className="w-4 h-4 md:w-5 md:h-5 text-white/50" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
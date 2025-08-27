'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* HERO */}
      <section className="flex-1 flex items-center justify-center w-full px-4 py-16">
        <motion.div
          className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-2xl backdrop-blur-md border border-indigo-200 dark:border-indigo-700"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-600 mb-2 text-center drop-shadow-lg"
            variants={fadeUp}
          >
            Rajat Toshniwal
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-semibold text-center mb-6"
            variants={fadeUp}
          >
            Backend & Full-Stack Developer
          </motion.h2>
          <motion.p
            className="text-center max-w-lg mx-auto text-gray-600 dark:text-gray-300 leading-relaxed mb-10"
            variants={fadeUp}
          >
            I build robust APIs and scalable web platforms using{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-300">
              Java, Spring Boot, PostgreSQL, and React/Next.js
            </span>
            . Committed to clean code and business value.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-wrap justify-center gap-8" variants={fadeUp}>
            <AnimatedButton href="/projects" color="purple">
              View Projects
            </AnimatedButton>
            <AnimatedButton href="/contact" color="indigo" outline>
              Contact Me
            </AnimatedButton>
            {/* ✅ Correct Resume Path */}
            <AnimatedButton href="/RajatToshniwal.pdf" download color="pink" outline icon>
              Download Resume
            </AnimatedButton>
          </motion.div>

          {/* Scroll down arrow */}
          <motion.div
            className="flex justify-center mt-12"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <svg
              className="w-8 h-8 text-indigo-400 dark:text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-xl mx-auto w-full flex flex-col items-center mb-20 px-4"
      >
        <h2 className="text-lg font-bold mb-4 text-indigo-600 uppercase tracking-wide">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {[
            "Java",
            "Spring Boot",
            "PostgreSQL",
            "MySQL",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "GitHub",
            "Docker",
          ].map((tech, i) => (
            <motion.span
              key={tech}
              className="inline-block px-5 py-1 rounded-full font-semibold text-sm cursor-default shadow-sm text-indigo-700 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 hover:scale-110 transform transition-transform duration-300 select-none"
              variants={fadeUp}
              custom={i}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

function AnimatedButton({ children, href, color, outline = false, download = false, icon = false }) {
  const base =
    "rounded-full px-8 py-3 font-semibold shadow-lg inline-flex items-center justify-center transition-all duration-300 ";
  const colors = {
    purple: outline
      ? "border-2 border-purple-500 text-purple-600 bg-transparent hover:bg-purple-600 hover:text-white"
      : "bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800",
    indigo: outline
      ? "border-2 border-indigo-500 text-indigo-600 bg-transparent hover:bg-indigo-600 hover:text-white"
      : "bg-gradient-to-r from-indigo-500 to-indigo-700 text-white hover:from-indigo-600 hover:to-indigo-800",
    pink: outline
      ? "border-2 border-pink-500 text-pink-600 bg-transparent hover:bg-pink-600 hover:text-white"
      : "bg-gradient-to-r from-pink-500 to-pink-700 text-white hover:from-pink-600 hover:to-pink-800",
  };

  return (
    <a
      href={href}
      download={download}
      className={`${base} ${colors[color]} active:scale-95 hover:scale-105`}
      target={download ? "_self" : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
    >
      {icon && (
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12"
          />
        </svg>
      )}
      {children}
    </a>
  );
}

'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: "E-commerce REST API",
    description:
      "A secure and scalable backend API built with Spring Boot and MySQL, featuring product management, user authentication, and order processing.",
    technologies: ["Java", "Spring Boot", "MySQL", "REST API"],
    github: "https://github.com/toshniwalrajat/ecommerce-api",
    demo: "",
  },
  {
    title: "Task Manager App",
    description:
      "Full-stack project with React frontend and Spring Boot backend. It includes JWT authentication, task CRUD, and PostgreSQL database.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "JWT"],
    github: "https://github.com/toshniwalrajat/task-manager",
    demo: "",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat app using Node.js, Express, Socket.io and React. Features private messaging and user presence.",
    technologies: ["Node.js", "Express", "Socket.io", "React"],
    github: "https://github.com/toshniwalrajat/chat-app",
    demo: "",
  },
  {
    title: "Blog Platform",
    description:
      "A fully-featured blogging platform built with Spring Boot and Thymeleaf. Includes post creation, tagging, and comments.",
    technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    github: "https://github.com/toshniwalrajat/blog-platform",
    demo: "",
  },
  {
    title: "Task Automation with Jenkins",
    description:
      "CI/CD pipeline setup using Jenkins and GitHub Actions for automated testing and deployment.",
    technologies: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes"],
    github: "",
    demo: "",
  },
  {
    title: "Expense Tracker",
    description:
      "React-based expense tracker with Node.js backend and MongoDB. Supports user authentication and chart visualization.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/toshniwalrajat/expense-tracker",
    demo: "",
  }
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.25, duration: 0.8 }
  }
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 text-transparent bg-clip-text"
        >
          My Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              className="bg-white/90 dark:bg-indigo-950/80 rounded-3xl shadow-xl border border-indigo-100 dark:border-indigo-900 p-8 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group relative"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.23 }}
              variants={cardVariants}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-300 group-hover:shadow-[0_0_0_4px_rgba(129,140,248,0.18)]" />

              <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {proj.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{proj.description}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {proj.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-3 py-1 rounded-full font-semibold text-sm bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-800 dark:to-indigo-900 text-indigo-700 dark:text-indigo-200 shadow-sm hover:scale-105 hover:from-purple-200 hover:to-indigo-200 dark:hover:from-indigo-900 dark:hover:to-purple-800 transition-transform duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-6 mt-auto">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline transition"
                  >
                    <span role="img" aria-label="GitHub">🐱</span> GitHub Repo
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-purple-600 dark:text-purple-400 hover:underline transition"
                  >
                    <span role="img" aria-label="Live">🚀</span> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

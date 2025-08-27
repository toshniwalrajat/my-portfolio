'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  // Animate skill bars on mount
  const [barsVisible, setBarsVisible] = useState(false);
  useEffect(() => { setBarsVisible(true); }, []);

  // Service offerings
  const services = [
    {
      title: "Custom Web Development",
      icon: (
        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M4 4h16v16H4V4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 10h16" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      description: "Modern, responsive websites and web apps tailored to your business or project needs."
    },
    {
      title: "API Integration & Automation",
      icon: (
        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx={12} cy={12} r={4} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 8V6a4 4 0 00-8 0v2M8 16v2a4 4 0 008 0v-2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      description: "Feature-rich, secure REST APIs and workflow automations to power your business logic."
    },
    {
      title: "UI/UX & Code Review",
      icon: (
        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M15 12H9m12 0A9 9 0 11 3 12a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      description: "Intuitive, accessible interfaces and best practices feedback for frontend/backend projects."
    },
  ];

  // Skills with proficiency
  const skills = [
    { label: "Java & Spring Boot", level: 95 },
    { label: "React.js / Next.js", level: 90 },
    { label: "Node.js & Express", level: 85 },
    { label: "RESTful APIs", level: 90 },
    { label: "SQL & Databases", level: 85 },
    { label: "MongoDB", level: 80 },
    { label: "Tailwind CSS", level: 92 },
  ];

  // Social/profile links
  const links = [
    { href: "mailto:rajattoshniwal2@gmail.com", label: "Email", icon: "✉️" },
    { href: "https://github.com/toshniwalrajat", label: "GitHub", icon: "🐱" },
    { href: "https://www.linkedin.com/in/rajat-toshniwal-900588192/", label: "LinkedIn", icon: "🔗" },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: i => ({ opacity: 1, transition: { delay: 0.2 * i } })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 py-12 px-6">
      <main className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 md:p-14">
        
        {/* Top Card: Profile & Socials */}
        <motion.section
          className="flex flex-col items-center pb-10 border-b border-gray-200 dark:border-gray-700"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="/profile.jpg"
            alt="Profile"
            className="w-36 h-36 rounded-full border-8 border-indigo-300 shadow-xl object-cover mb-4"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
          />
          <h1 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-2 text-center">
            Hi, I'm Rajat Toshniwal
          </h1>
          <h2 className="text-lg text-indigo-500 mb-6 text-center font-semibold">
            Full-Stack Developer | API Expert | Freelancer
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mb-2">
            {links.map(({ href, label, icon }, i) => (
              <motion.a
                custom={i}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-indigo-50 dark:bg-indigo-700 hover:bg-indigo-100 dark:hover:bg-indigo-600 text-indigo-700 dark:text-indigo-200 px-5 py-2 rounded-full font-semibold shadow transition-all duration-200 active:scale-95"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="text-xl mr-2">{icon}</span>
                {label}
              </motion.a>
            ))}
            {/* Resume Download Button */}
            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold shadow px-6 py-2 hover:from-indigo-600 hover:to-purple-600 transition-colors duration-200 active:scale-95"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" />
              </svg>
              Download Resume
            </motion.a>
          </div>
        </motion.section>

        {/* Backend Development Section */}
        <motion.section
          className="py-10 border-b border-gray-200 dark:border-gray-700 max-w-xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
            Backend Development Expertise
          </h3>
          <div className="space-y-5 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            <motion.p variants={fadeUp}>
              I specialize in building robust and scalable backend systems using <span className="font-semibold text-indigo-700 dark:text-indigo-400">Java</span> and <span className="font-semibold text-indigo-700 dark:text-indigo-400">Spring Boot</span>. This stack enables me to rapidly create secure, maintainable REST APIs and complex business logic.
            </motion.p>
            <motion.p variants={fadeUp} transition={{ delay: 0.1 }}>
              For data storage, I use reliable SQL databases like <span className="font-semibold text-blue-900 dark:text-blue-300">MySQL</span> and <span className="font-semibold text-blue-900 dark:text-blue-300">PostgreSQL</span>, designing efficient schemas and queries for consistency and performance.
            </motion.p>
            <motion.p variants={fadeUp} transition={{ delay: 0.15 }}>
              My workflow includes best practices for:
            </motion.p>
            <motion.ul className="list-disc list-inside ml-3" variants={fadeUp} transition={{ delay: 0.18 }}>
              <li>Dependency injection and application security with Spring Boot</li>
              <li>API documentation (Swagger/OpenAPI)</li>
              <li>Testing with JUnit and Postman</li>
              <li>Containerized deployment with Docker</li>
              <li>Version control & CI/CD via GitHub and GitHub Actions</li>
            </motion.ul>
            <motion.p variants={fadeUp} transition={{ delay: 0.2 }}>
              This ensures your backend is production-ready, efficient, easily integrated, and future proof.
            </motion.p>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          className="py-10 border-b border-gray-200 dark:border-gray-700"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
            My Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-indigo-50 dark:bg-indigo-800 rounded-xl shadow p-6 flex flex-col items-center text-center transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {service.icon}
                <h4 className="text-lg font-bold text-indigo-700 dark:text-indigo-200 mt-4 mb-2">{service.title}</h4>
                <p className="text-gray-700 dark:text-gray-200 text-base">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          className="py-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
            Technical Skills
          </h3>
          <div className="space-y-6 max-w-xl mx-auto">
            {skills.map(({ label, level }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * idx, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-gray-900 dark:text-gray-300 font-semibold">{label}</span>
                  <span className="text-indigo-600 dark:text-indigo-300 font-bold">{level}%</span>
                </div>
                <div className="w-full h-4 bg-indigo-100 dark:bg-indigo-900 rounded-full overflow-hidden">
                  <motion.div
                    className="h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow transition-all duration-1000 ease-in-out"
                    animate={{ width: barsVisible ? `${level}%` : 0 }}
                    transition={{ delay: 0.2 + idx * 0.07, duration: 1.1, type: "tween" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}

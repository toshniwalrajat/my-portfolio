'use client';

export default function ResumePage() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Dr Babasaheb Ambedkar Marathwada University",
      year: "2022",
    },
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Savitribai Phule Pune University",
      year: "2025",
    },
  ];

  const projects = [
    {
      name: "E-commerce REST API",
      description:
        "Built secure backend with Spring Boot and MySQL handling orders and user authentication.",
      github: "https://github.com/toshniwalrajat/ecommerce-api",
    },
    {
      name: "Task Manager App",
      description:
        "Full-stack React and Spring Boot app with JWT authentication and PostgreSQL.",
      github: "https://github.com/toshniwalrajat/task-manager",
    },
    {
      name: "Chat Application",
      description:
        "Real-time chat app with Socket.io and React supporting private messaging.",
      github: "https://github.com/toshniwalrajat/chat-app",
    },
  ];

  const skills = [
    "Java", "Spring Boot", "PostgreSQL", "MySQL", "React.js", "Next.js", "Tailwind CSS", "GitHub", "Docker",
  ];

  const certifications = [
    "C Programming Certification",
    "C++ Programming Certification",
    "Core Java Certification",
    "Advanced Java Certification",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-tr from-indigo-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-12 md:p-20">
        <h1 className="text-6xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-16 text-center tracking-tight drop-shadow-lg">
          Resume
        </h1>

        {/* Resume Download + View Buttons */}
        <div className="flex justify-center gap-6 mb-16">
          <a
            href="/RajatToshniwal.pdf"
            download
            className="inline-flex items-center gap-3 px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white font-bold shadow-xl hover:from-purple-700 hover:to-indigo-800 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" />
            </svg>
            Download Resume (PDF)
          </a>

          <a
            href="/RajatToshniwal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-4 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-full text-white font-bold shadow-xl hover:from-indigo-700 hover:to-purple-800 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            View Resume
          </a>
        </div>

        {/* Professional Summary */}
        <section className="mb-20 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 border-b-4 border-indigo-500 inline-block pb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Aspiring backend and full-stack developer with expertise in Java, Spring Boot, and modern front-end technologies.
            Passionate about crafting clean, efficient code and building scalable applications that solve real problems.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 border-b-4 border-indigo-500 pb-2 w-fit mx-auto">
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-5 justify-center">
            {skills.map(skill => (
              <span
                key={skill}
                className="px-6 py-2 bg-gradient-to-r from-indigo-100 to-purple-200 dark:from-indigo-800 dark:to-indigo-900 text-indigo-800 dark:text-indigo-100 rounded-full font-semibold text-lg shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 border-b-4 border-indigo-500 pb-2 w-fit mx-auto">
            Certifications
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg max-w-xl mx-auto">
            {certifications.map(cert => (
              <li key={cert}>
                {cert}
              </li>
            ))}
          </ul>
        </section>

        {/* Selected Projects */}
        <section className="mb-20 max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-10 border-b-4 border-indigo-500 pb-3 w-fit mx-auto">
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {projects.map(({ name, description, github }) => (
              <div
                key={name}
                className="bg-indigo-50 dark:bg-indigo-800 rounded-3xl p-8 shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">
                  {name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {description}
                </p>
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline transition"
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-10 border-b-4 border-indigo-500 pb-3 w-fit mx-auto">
            Education
          </h2>
          <ul className="space-y-6 text-gray-700 dark:text-gray-300 text-lg max-w-xl mx-auto">
            {education.map(({ degree, institution, year }) => (
              <li key={degree} className="border-l-4 border-indigo-500 pl-6">
                <p className="font-bold">{degree}</p>
                <p>{institution}</p>
                <p className="italic text-indigo-600 dark:text-indigo-400">{year}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Call to Action */}
        <div className="mt-24 text-center text-indigo-700 dark:text-indigo-400 font-semibold text-xl tracking-wide">
          Interested in working together?{" "}
          <a
            href="/contact"
            className="underline underline-offset-4 decoration-indigo-500 hover:text-indigo-900 dark:hover:text-indigo-300 transition"
          >
            Get in touch!
          </a>
        </div>
      </div>
    </main>
  );
}

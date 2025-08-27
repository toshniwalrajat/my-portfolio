'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  // Simple form validation
  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(null);
    setSubmitted(false);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        setLoading(false);

        if (res.ok && data.success) {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          setApiError(data.error || "Something went wrong. Please try again.");
        }
      } catch (err) {
        console.error("Error submitting form:", err);
        setLoading(false);
        setApiError("Server error. Please try again later.");
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-12 md:p-20">
        <h1 className="text-5xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-8 text-center">
          Let&apos;s Connect
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 text-lg max-w-xl mx-auto">
          Have a project in mind or just want to say hi? Fill the form below or reach out via email and social links.
        </p>

        {submitted ? (
          <div className="text-center text-green-600 dark:text-green-400 font-semibold text-xl">
            ✅ Thank you for reaching out! I will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Name<span className="text-red-600">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg shadow-sm border ${
                  errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-100`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-600 mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg shadow-sm border ${
                  errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-100`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-600 mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Message<span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg shadow-sm border ${
                  errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-100`}
                placeholder="Write your message here..."
              />
              {errors.message && <p className="text-red-600 mt-1">{errors.message}</p>}
            </div>

            {/* API Error */}
            {apiError && <p className="text-red-600 text-center">{apiError}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-800 transition-colors duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

        {/* Footer */}
        <div className="mt-14 pt-12 border-t border-indigo-200 dark:border-indigo-700 flex flex-col md:flex-row md:justify-between items-center gap-5 text-center md:text-left">
          <div className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:rajattoshniwal2@gmail.com" className="text-indigo-600 hover:underline">
              rajattoshniwal2@gmail.com
            </a>
            <br />
            <span className="font-semibold">Location:</span> Pune, India
          </div>
        </div>
      </div>
    </main>
  );
}

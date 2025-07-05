import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 transition-all duration-500 ease-in-out"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-full max-w-3xl p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:shadow-2xl text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          About Our <span className="text-blue-600 dark:text-blue-400">Lost & Found</span> Platform
        </motion.h1>

        <motion.p
          className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Our mission is simple: to <span className='text-blue-400'>reconnect lost items with their rightful owners</span> and empower individuals to responsibly report items they've found. We understand the stress and frustration of losing a valuable possession, as well as the joy of returning one. This platform aims to make that process as straightforward and stress-free as possible for everyone.
        </motion.p>

        <motion.p
          className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Whether you've misplaced your keys on campus, found a wallet in a public place, or are searching for a beloved pet, our intuitive system allows you to quickly list or browse items, increasing the chances of a <span className='text-blue-400'>successful reunion.</span>
        </motion.p>

        <motion.div
          className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Meet the Creator
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            This platform was conceptualized and developed by <span className='text-red-400'>- KUNAL CHOUDHARY</span> with a vision to leverage technology for community benefit. My goal was to create a user-friendly and efficient tool that fosters helpfulness and trust within the community.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-3">
            Thank you for being a part of our growing community!
          </p>
        </motion.div>

        <motion.div
          className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Connect with Me
          </h2>
          <div className="flex justify-center gap-6 text-3xl">
            <a
              href="https://www.linkedin.com/in/kunal-choudhary-40839a338/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/KunalChoudhary03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-black transition"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;

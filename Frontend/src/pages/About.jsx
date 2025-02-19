// src/pages/About.jsx

import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function About() {
  // Framer Motion variants for container elements
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  // Team members data – replace with your actual data
  const teamMembers = [
    {
      name: 'Jane Doe',
      role: 'Founder & CEO',
      image: 'https://via.placeholder.com/300?text=Jane+Doe',
    },
    {
      name: 'John Smith',
      role: 'Creative Director',
      image: 'https://via.placeholder.com/300?text=John+Smith',
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Writer',
      image: 'https://via.placeholder.com/300?text=Alice+Johnson',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-900">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full h-96 md:h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://via.placeholder.com/1920x1080?text=About+Hero')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              About Us
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              At Wordcraft, we believe that words have the power to transform lives.
              Our journey began with a simple idea: to harness creativity and storytelling
              to connect people and spark innovation.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Over the years, our passionate team of writers, designers, and innovators
              has dedicated itself to crafting compelling narratives that resonate with audiences
              around the world. We merge creativity with technology to produce content that not only
              informs but inspires.
            </p>
            <p className="text-lg text-gray-700">
              Join us as we continue to explore the art of storytelling, break new ground in digital media,
              and create experiences that leave a lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white shadow rounded-md overflow-hidden"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

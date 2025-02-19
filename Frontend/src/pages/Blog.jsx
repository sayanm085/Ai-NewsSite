// src/pages/Blog.jsx

import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

// Fetch function for demonstration
async function fetchBlog(id) {
  // For demo, fetch blog details from JSONPlaceholder and add extra content
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()

  return {
    id: data.id,
    title: data.title,
    body:
      data.body +
      '\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: `https://picsum.photos/seed/${data.id}/1200/600`,
    uploadDate: new Date().toLocaleDateString(),
    tags: ['Portfolio', 'Guide'],
    author: 'Jane Doe', // Example field
  }
}

export default function Blog() {
  const { id } = useParams()
  const { data: blog, isLoading, isError } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => fetchBlog(id),
  })

  if (isLoading) {
    return (
      <Layout>
        <p className="text-center py-12">Loading blog...</p>
      </Layout>
    )
  }
  if (isError || !blog) {
    return (
      <Layout>
        <p className="text-center py-12">Error loading blog.</p>
      </Layout>
    )
  }

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="mb-6"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </motion.div>

          {/* Tags */}
          {blog.tags?.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}

          {/* Title + Author + Date */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
              {blog.title}
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              By {blog.author} <span className="mx-1">•</span> Published on:{' '}
              {blog.uploadDate}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <motion.article
        className="max-w-4xl mx-auto px-4 pb-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="prose max-w-none leading-relaxed text-gray-800">
          {blog.body.split('\n').map((para, index) => (
            <p key={index} className="mb-4">
              {para}
            </p>
          ))}
        </div>
      </motion.article>
    </Layout>
  )
}

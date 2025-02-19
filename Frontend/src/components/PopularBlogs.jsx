// src/components/PopularBlogs.jsx

import React from "react"
import BlogCard from "./BlogCard"
import { Button } from "@/components/ui/button"

// Example placeholder data
const blogs = [
  {
    category: "Lifestyle",
    title: "How to create a seamless user journey on your website",
    date: "November 10, 2024",
    readTime: "7 min read",
    image: "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/6730a00fe3bcfa37f98cde43_blog-thumb-11-p-800.jpg",
  },
  {
    category: "Technology",
    title: "How to build a scalable design system from scratch",
    date: "November 10, 2024",
    readTime: "6 min read",
    image: "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/6730a0365208612c35d2b016_blog-thumb-12-p-800.jpg",
  },
  {
    category: "Gaming",
    title: "The art of balancing creativity and user experience in design",
    date: "November 12, 2024",
    readTime: "8 min read",
    image: "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/6730a0585983c9ebedb1854a_blog-thumb-13-p-800.jpg",
  },
  {
    category: "Hobbies",
    title: "Creating the most effective call-to-action buttons",
    date: "November 12, 2024",
    readTime: "7 min read",
    image: "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/6730a0a5ac02ab42b8585b44_blog-thumb-15-p-800.jpg",
  },
  {
    category: "Science",
    title: "10 must-have features for a modern portfolio website",
    date: "November 12, 2024",
    readTime: "5 min read",
    image: "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/6730a0821b68eeebc0509ed2_blog-thumb-14-p-800.jpg",
  },
  {
    category: "Pet Care",
    title: "Why mobile-first design is no longer optional",
    date: "November 12, 2024",
    readTime: "5 min read",
    image: "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/6730a0d8523aaea8458856d7_blog-thumb-16-p-800.jpg",
  },
]

export default function PopularBlogs() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Popular Blogs
          </h2>
          <Button variant="outline" className="text-sm flex items-center gap-2">
            View All →
          </Button>
        </div>

        {/* Responsive Grid of Article Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  )
}

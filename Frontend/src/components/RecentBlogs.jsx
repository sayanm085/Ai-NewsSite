import React from "react"
import { motion } from "framer-motion"

// shadcn UI components (adjust imports as needed)
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Example blog data matching the screenshot
const recentBlogsData = [
  {
    id: 1,
    category: "Technology",
    title: "Boost your online sales with these top conversion strategies",
    author: "Courtney Henry",
    date: "November 10, 2024",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/tech1/600/400", // Replace with your swirl image
  },
  {
    id: 2,
    category: "Lifestyle",
    title: "The ultimate guide to creating a standout portfolio in 2024",
    date: "November 10, 2024",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/life1/600/400",
  },
  {
    id: 3,
    category: "Science",
    title: "How to optimize your website for faster loading times",
    date: "November 10, 2024",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/science1/600/400",
  },
  {
    id: 4,
    category: "Hobbies",
    title: "5 design trends shaping the future of digital experiences",
    date: "November 10, 2024",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/hobbies1/600/400",
  },
]

// A helper “motion” version of shadcn UI’s Card
const MotionCard = motion(Card)

export default function RecentBlogs() {
  // Separate the big “feature” blog from the smaller ones
  const [feature, ...others] = recentBlogsData

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Recent Blogs
        </h2>

        {/* Layout: Big card on left, smaller cards on right */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Feature Card */}
          <div className="md:w-7/12">
            <MotionCard
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="shadow-lg hover:shadow-xl transition h-full"
            >
              <CardHeader className="relative p-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover rounded-t-md"
                />
                {/* Category Pill in top-left corner (optional styling) */}
                <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                  {feature.category}
                </span>
              </CardHeader>
              <CardContent className="p-4 flex flex-col justify-between flex-grow">
                <CardTitle className="text-xl font-semibold mb-2">
                  {feature.title}
                </CardTitle>
                <p className="text-sm text-gray-500 mb-4">
                  {feature.author && (
                    <>
                      {feature.author} <span className="mx-1">•</span>
                    </>
                  )}
                  {feature.date} <span className="mx-1">•</span> {feature.readTime}
                </p>
                <Button variant="outline" className="text-sm w-fit">
                  Read more
                </Button>
              </CardContent>
            </MotionCard>
          </div>

          {/* Right: Three smaller cards */}
          <div className="md:w-5/12 flex flex-col gap-6">
            {others.map((blog) => (
              <MotionCard
                key={blog.id}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="shadow-md hover:shadow-lg transition"
              >
                <CardHeader className="relative p-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-40 object-cover rounded-t-md"
                  />
                  {/* Category Pill */}
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                    {blog.category}
                  </span>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-base font-semibold mb-1">
                    {blog.title}
                  </CardTitle>
                  <p className="text-xs text-gray-500">
                    {blog.date} <span className="mx-1">•</span> {blog.readTime}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="text-sm">
                    Read more
                  </Button>
                </CardFooter>
              </MotionCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

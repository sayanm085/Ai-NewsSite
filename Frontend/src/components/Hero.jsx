import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Example slider data
const sliderItems = [
  {
    id: 1,
    category: "Travel & Culture",
    title: "The psychology of color impact in web design",
    date: "November 12, 2023",
    readTime: "7 mins",
    image: "https://picsum.photos/seed/frontCard/400/250",
  },
  {
    id: 2,
    category: "Travel & Culture",
    title: "Explore hidden gems across the globe",
    date: "November 10, 2023",
    readTime: "5 mins",
    image: "https://picsum.photos/seed/backCard/400/250",
  },
  {
    id: 3,
    category: "Tech & Innovation",
    title: "The future of AI in creative writing",
    date: "November 15, 2023",
    readTime: "6 mins",
    image: "https://picsum.photos/seed/techWriting/400/250",
  },
]

// Custom Framer Motion variants for a video‑type transition
const cardVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    x: 100,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    x: -100,
    filter: "blur(8px)",
    transition: { duration: 1, ease: "easeInOut" },
  },
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-cycle cards every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderItems.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* LEFT SIDE: Headline, Subheading, CTA */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
            Global Stories &amp; Articles
          </h1>
          <p className="text-lg  text-gray-600 mb-6">
            A place to read, write, and deepen your understanding.
          </p>
          <Button className="bg-black text-white hover:bg-black px-6 py-3 text-sm font-medium">
            Explore Articles
          </Button>
        </div>

        {/* RIGHT SIDE: Animated Card */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          <div className="w-full md:w-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={sliderItems[currentIndex].id}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Card className="shadow-lg hover:shadow-xl transition">
                  <CardHeader className="p-0">
                    <img
                      src={sliderItems[currentIndex].image}
                      alt={sliderItems[currentIndex].title}
                      className="w-full h-48 object-cover rounded-t-md"
                    />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-1">
                      {sliderItems[currentIndex].category}
                    </p>
                    <CardTitle className="text-lg font-semibold">
                      {sliderItems[currentIndex].title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-gray-400">
                        {sliderItems[currentIndex].date}
                      </span>
                      <span className="text-xs text-gray-400">
                        {sliderItems[currentIndex].readTime}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="text-sm">
                      Read more
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

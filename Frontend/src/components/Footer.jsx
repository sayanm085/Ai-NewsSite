// src/components/Footer.jsx

import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Example data for the angled cards
const leftCard = {
  category: "Travel & Culture",
  title: "The psychology of color impact in web design",
  date: "November 12, 2023",
  readTime: "7 mins read",
  // If placeholder.com is blocked, replace with your own swirl image URL:
  image: "https://fastly.picsum.photos/id/60/600/400.jpg?hmac=xMGMvH75zyc5CAIwvpHgrD-B3JVAtKuvodBW8BrGapM",
}

const rightCard = {
  category: "Social Issues",
  title: "The importance of A/B testing your website",
  date: "November 10, 2023",
  readTime: "6 mins read",
  // If placeholder.com is blocked, replace with your own swirl image URL:
  image: "https://fastly.picsum.photos/id/134/600/400.jpg?hmac=GYoZSDKT34ygtDjRhJTsRrgtjso3oino2e4RPQyUG5s",
}

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* LEFT ANGLED CARD (Hide on small screens) */}
        <div className="hidden md:block absolute -top-10 left-0 transform -rotate-6 z-20">
          <Card className="w-64 shadow-lg">
            <CardHeader className="relative p-0">
              <img
                src={leftCard.image}
                alt={leftCard.title}
                className="w-full h-40 object-cover rounded-t-md"
              />
              <span className="absolute top-2 left-2 bg-white text-black text-xs font-medium px-2 py-1 rounded shadow-sm">
                {leftCard.category}
              </span>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-sm font-semibold mb-2 leading-tight">
                {leftCard.title}
              </CardTitle>
              <p className="text-xs text-gray-500 mb-2">
                {leftCard.date} • {leftCard.readTime}
              </p>
            </CardContent>
            <CardFooter className="p-4">
              <Button variant="outline" className="text-xs">
                Read more
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* RIGHT ANGLED CARD (Hide on small screens) */}
        <div className="hidden md:block absolute -top-16 right-0 transform rotate-6 z-20">
          <Card className="w-64 shadow-lg">
            <CardHeader className="relative p-0">
              <img
                src={rightCard.image}
                alt={rightCard.title}
                className="w-full h-40 object-cover rounded-t-md"
              />
              <span className="absolute top-2 left-2 bg-white text-black text-xs font-medium px-2 py-1 rounded shadow-sm">
                {rightCard.category}
              </span>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-sm font-semibold mb-2 leading-tight">
                {rightCard.title}
              </CardTitle>
              <p className="text-xs text-gray-500 mb-2">
                {rightCard.date} • {rightCard.readTime}
              </p>
            </CardContent>
            <CardFooter className="p-4">
              <Button variant="outline" className="text-xs">
                Read more
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* CENTER CONTENT: Newsletter + Links */}
        <div className="relative text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-bold mb-3">
            Stay in the know with our weekly AI newsletter
          </h2>
          <p className="text-sm md:text-xl text-center text-gray-600 mb-8">
          Regular updates ensure that readers have access to fresh perspectives, making Poster a must-read.
          </p>

          {/* Newsletter Signup */}
          <form className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-8">
            <input
              type="email"
              placeholder="Email address"
              className="bg-white text-black px-4 py-2 rounded w-full sm:w-auto min-w-[200px] focus:outline-none"
            />
            <Button className="bg-white text-black hover:bg-gray-200 px-6 py-2 text-sm">
              Subscribe
            </Button>
          </form>

          {/* Footer Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm mb-6">
            <a href="#" className="hover:underline">
              Articles
            </a>
            <a href="#" className="hover:underline">
              Categories
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <a href="#" className="hover:underline">
              Style guide
            </a>
            <a href="#" className="hover:underline">
              Licenses
            </a>
            <a href="#" className="hover:underline">
              Changelog
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-gray-400 mb-2">
            ©AI NewsSite. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Designed by Sayan Mondal &middot; Powered by Shotlin
          </p>
        </div>
      </div>

      {/* LARGE “AI NewsSite” TEXT AT BOTTOM (Semi-Transparent) */}
      <div className="mt-12 text-center">
        <h1 className="text-5xl md:text-9xl font-bold text-white opacity-45">
        AI NewsSite
        </h1>
      </div>
    </footer>
  )
}

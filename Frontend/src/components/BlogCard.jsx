

import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogCard({ category, title, date, readTime, image }) {
  return (
    <Card className="shadow-sm hover:shadow-md transition rounded-md">
      {/* Image + Category Pill */}
      <CardHeader className="relative p-0">
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover rounded-t-md"
        />
        <span className="absolute top-2 left-2 bg-white text-black text-xs font-medium px-2 py-1 rounded shadow-sm">
          {category}
        </span>
      </CardHeader>

      {/* Title + Date/Read Time */}
      <CardContent className="p-4">
        <CardTitle className="text-base font-semibold leading-tight mb-2">
          {title}
        </CardTitle>
        <p className="text-xs text-gray-500">
          {date} <span className="mx-1">•</span> {readTime}
        </p>
      </CardContent>

      {/* "Read more" Button */}
      <CardFooter className="p-4">
        <Button variant="outline" className="text-sm">
          Read more
        </Button>
      </CardFooter>
    </Card>
  )
}

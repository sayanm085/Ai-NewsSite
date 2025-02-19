import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function ArticleCard({ article }) {
  // Example fields: article.category, article.date, article.readTime
  // If your data is different, adjust accordingly.

  return (
    <Card className="shadow-sm hover:shadow-md transition rounded-md">
      {/* Image + Category Pill */}
      <CardHeader className="relative p-0">
        {article.img && (
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-44 object-cover rounded-t-md"
          />
        )}
        {/* Category Pill (if you have article.category) */}
        {article.category && (
          <span className="absolute top-2 left-2 bg-white text-black text-xs font-medium px-2 py-1 rounded shadow-sm">
            {article.category}
          </span>
        )}
      </CardHeader>

      {/* Title + Date/Read Time + Snippet */}
      <CardContent className="p-4">
        <CardTitle className="text-base font-semibold leading-tight mb-2">
          {article.title}
        </CardTitle>

        {/* Date & Read Time (adjust to your data) */}
        {article.date && article.readTime && (
          <p className="text-xs text-gray-500 mb-2">
            {article.date} <span className="mx-1">•</span> {article.readTime}
          </p>
        )}

        {/* Body snippet */}
        {article.body && (
          <p className="text-sm text-gray-600">
            {article.body.slice(0, 100)}...
          </p>
        )}
      </CardContent>

      {/* "Read more" Button */}
      <CardFooter className="p-4">
        <Link to={`/blog/${article.id}`}>
          <Button variant="outline" className="text-sm">
            Read more
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

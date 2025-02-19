import React from 'react'

export default function CategoryCard() {
  // Example category data
  const categories = [
    'Automotive',
    'Entertainment',
    'Gaming',
    'Hobbies',
    'Lifestyle',
    'Pet Care',
    'Science',
    'Social Issues',
    'Technology',
    'Travel & Culture',
    'Work Life',
  ]

  return (
    <section className="w-full">

      {/* Category Pills */}
      <div className="bg-white py-10 flex flex-wrap items-center justify-center gap-4">
        {categories.map((cat) => (
          <div
            key={cat}
            className="
              px-4 py-2 
              border border-gray-300 
              rounded-full 
              text-sm 
              text-gray-700 
              cursor-pointer 
              hover:bg-gray-100 
              transition
            "
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  )
}

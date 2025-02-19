import React from 'react'
import CategoryCard from '../components/CategoryCard'
import Layout from '../components/Layout'
export default function AllCategories() {


  return (
    <Layout>
    <section className="w-full">
      {/* Top Section: Heading */}
      <div className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          All Categories
        </h1>
      </div>

      {/* Category Pills */}

      <CategoryCard />

    </section>
    </Layout>
  )
}

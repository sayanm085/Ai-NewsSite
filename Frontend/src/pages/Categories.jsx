import React from 'react';
import Layout from '../components/Layout';
import CategoryCard from '../components/CategoryCard';

const categoriesData = [
  { slug: 'design', name: 'Design', description: 'Inspiration and ideas for creative design.' },
  { slug: 'development', name: 'Development', description: 'Latest trends in web development.' },
  { slug: 'marketing', name: 'Marketing', description: 'Strategies for digital marketing success.' },
];

export default function Categories() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoriesData.map(category => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

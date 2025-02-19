import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ArticleCard from '../components/ArticleCard';
import { useQuery } from '@tanstack/react-query';

async function fetchFeaturedArticles() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  const data = await res.json();
  return data.map(item => ({
    id: item.id,
    title: item.title,
    body: item.body,
    tags: ['Inspiration', 'Design'],
    img: `https://picsum.photos/seed/${item.id}/600/400`,
    uploadDate: new Date().toLocaleDateString(),
    initialLikes: Math.floor(Math.random() * 100)
  }));
}

export default function Home() {
  const { data: featured, isLoading, isError } = useQuery({
    queryKey: ['featured'],
    queryFn: fetchFeaturedArticles,
  });

  return (
    <Layout>
      <Hero />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Featured Articles</h2>
        {isLoading && <p>Loading articles...</p>}
        {isError && <p>Error loading articles.</p>}
        {featured && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

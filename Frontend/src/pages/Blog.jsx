import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Layout from '../components/Layout';

async function fetchBlog(id) {
  // For demo, fetch blog details from JSONPlaceholder and add simulated extra content.
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    id: data.id,
    title: data.title,
    body: data.body + "\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: `https://picsum.photos/seed/${data.id}/1200/600`,
    uploadDate: new Date().toLocaleDateString(),
    tags: ['Portfolio', 'Guide']
  };
}

export default function Blog() {
  const { id } = useParams();
  const { data: blog, isLoading, isError } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => fetchBlog(id),
  });

  if (isLoading) return <Layout><p>Loading blog...</p></Layout>;
  if (isError || !blog) return <Layout><p>Error loading blog.</p></Layout>;

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 py-12">
        <img src={blog.img} alt={blog.title} className="w-full h-auto object-cover rounded-md mb-6" />
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-8">Published on: {blog.uploadDate}</p>
        <div className="prose max-w-none">
          {blog.body.split('\n').map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </article>
    </Layout>
  );
}

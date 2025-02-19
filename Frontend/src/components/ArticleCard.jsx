import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function ArticleCard({ article }) {
  const [likes, setLikes] = useState(article.initialLikes || 0);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin + `/blog/${article.id}`);
    alert('Article link copied to clipboard!');
  };

  return (
    <Card className="overflow-hidden shadow hover:shadow-lg transition">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{article.title}</CardTitle>
        <CardDescription className="flex flex-wrap gap-2 text-sm text-gray-500">
          {article.tags?.map((tag, idx) => (
            <span key={idx} className="px-2 py-1 bg-gray-200 rounded-md">
              {tag}
            </span>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {article.img && (
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-48 object-cover rounded-md mb-3"
          />
        )}
        <p className="text-gray-700">{article.body?.slice(0, 100)}...</p>
        <p className="mt-2 text-xs text-gray-400">Uploaded on: {article.uploadDate}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={handleLike}>
            Like ({likes})
          </Button>
          <Button variant="outline" onClick={handleShare}>
            Share
          </Button>
        </div>
        <Link to={`/blog/${article.id}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {
  return (
    <Link to={`/categories?category=${category.slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{category.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{category.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

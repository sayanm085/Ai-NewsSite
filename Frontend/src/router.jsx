import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/ArticleDetail';
import Categories from './pages/Categories';
import Blog from './pages/Blog';
import About from './pages/About';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/articles', element: <Articles /> },
  { path: '/categories', element: <Categories /> },
  { path: '/blog/:id', element: <Blog /> },
  {path: '/about', element: <About />}
]);

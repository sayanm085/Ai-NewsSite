import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Categories from './pages/Categories';
import Blog from './pages/Blog';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/articles', element: <Articles /> },
  { path: '/categories', element: <Categories /> },
  { path: '/blog/:id', element: <Blog /> }
]);

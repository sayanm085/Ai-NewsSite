import React from 'react';
import { Button } from '@/components/ui/button'; // Adjust the import path based on your setup

export default function Hero() {
  return (
    <section 
      className="relative bg-cover bg-center h-screen" 
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?blur=2')" }}>
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          Discover Inspiring Stories
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8">
          Unleash your creativity with the ultimate guides on design, portfolio building, and more.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Explore Now
        </Button>
      </div>
    </section>
  );
}

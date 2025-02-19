import React from 'react';

export function Footer() {
  return (
    <footer className="py-6 bg-gray-100 text-center">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} WordCrafts Clone. All rights reserved.
      </p>
    </footer>
  );
}

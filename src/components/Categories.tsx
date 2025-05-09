
import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  image: string;
  itemCount: number;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Living Room',
    image: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2071&auto=format&fit=crop',
    itemCount: 45
  },
  {
    id: 2,
    name: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=2069&auto=format&fit=crop',
    itemCount: 32
  },
  {
    id: 3,
    name: 'Dining',
    image: 'https://images.unsplash.com/photo-1615968679312-9b7ed9f04e79?q=80&w=2070&auto=format&fit=crop',
    itemCount: 21
  },
  {
    id: 4,
    name: 'Office',
    image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop',
    itemCount: 18
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collections of carefully curated furniture for every space in your home
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              to={`/category/${category.id}`} 
              key={category.id}
              className="group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                  <h3 className="text-xl font-serif font-semibold">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.itemCount} items</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

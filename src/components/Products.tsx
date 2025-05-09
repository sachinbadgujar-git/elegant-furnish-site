
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  category: string;
  isBestseller?: boolean;
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Artisan Wooden Coffee Table',
    image: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=2026&auto=format&fit=crop',
    price: 249.99,
    originalPrice: 329.99,
    category: 'Living Room',
    isBestseller: true
  },
  {
    id: 2,
    name: 'Plush Comfort Sectional Sofa',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
    price: 1299.99,
    category: 'Living Room',
    isNew: true
  },
  {
    id: 3,
    name: 'Ergonomic Office Chair',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2069&auto=format&fit=crop',
    price: 189.99,
    originalPrice: 249.99,
    category: 'Office'
  },
  {
    id: 4,
    name: 'Scandinavian Bedside Table',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop',
    price: 129.99,
    category: 'Bedroom'
  },
  {
    id: 5,
    name: 'Upholstered Platform Bed Frame',
    image: 'https://images.unsplash.com/photo-1617325247662-d7d5773b4396?q=80&w=1971&auto=format&fit=crop',
    price: 399.99,
    category: 'Bedroom',
    isBestseller: true
  },
  {
    id: 6,
    name: 'Modern Dining Table Set',
    image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=2070&auto=format&fit=crop',
    price: 599.99,
    category: 'Dining'
  },
  {
    id: 7,
    name: 'Minimalist TV Stand',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop',
    price: 179.99,
    category: 'Living Room'
  },
  {
    id: 8,
    name: 'Executive Desk',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=2076&auto=format&fit=crop',
    price: 349.99,
    originalPrice: 429.99,
    category: 'Office',
    isNew: true
  }
];

const categories = ['All', 'Living Room', 'Bedroom', 'Dining', 'Office'];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our finest selection of quality furniture pieces
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-accent text-accent-foreground text-xs font-medium py-1 px-2 rounded">New</span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-primary text-primary-foreground text-xs font-medium py-1 px-2 rounded">Bestseller</span>
                  )}
                </div>
                
                {/* Quick add button */}
                {hoveredProduct === product.id && (
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/90 transform transition-transform duration-300">
                    <Button variant="default" className="w-full flex items-center justify-center gap-2">
                      <ShoppingCart size={16} />
                      Add to Cart
                    </Button>
                  </div>
                )}
              </div>
              
              {/* Product info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <Heart size={18} />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View more button */}
        <div className="mt-12 text-center">
          <Button variant="outline" className="btn-outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;

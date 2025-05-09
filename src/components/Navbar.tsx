
import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-primary">
              ElegantHome
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/categories" className="nav-link">Categories</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <ShoppingCart size={20} />
              <span className="sr-only">Cart</span>
            </button>
            <button className="md:hidden p-2" onClick={toggleMenu}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 animate-slide-in">
          <div className="container-custom py-4">
            <div className="flex justify-end">
              <button className="p-2" onClick={toggleMenu}>
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 py-8">
              <Link to="/" className="text-xl py-2" onClick={toggleMenu}>Home</Link>
              <Link to="/shop" className="text-xl py-2" onClick={toggleMenu}>Shop</Link>
              <Link to="/categories" className="text-xl py-2" onClick={toggleMenu}>Categories</Link>
              <Link to="/about" className="text-xl py-2" onClick={toggleMenu}>About</Link>
              <Link to="/contact" className="text-xl py-2" onClick={toggleMenu}>Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

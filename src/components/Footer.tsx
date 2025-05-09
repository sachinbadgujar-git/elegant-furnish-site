
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-furniture-brown text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block text-2xl font-serif font-bold mb-4">
              ElegantHome
            </Link>
            <p className="text-sm text-white/80 mb-6">
              Creating beautiful spaces with thoughtfully designed furniture for homes that tell your story.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Shop Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/category/living-room" className="text-white/80 hover:text-white transition-colors">Living Room</Link></li>
              <li><Link to="/category/bedroom" className="text-white/80 hover:text-white transition-colors">Bedroom</Link></li>
              <li><Link to="/category/dining" className="text-white/80 hover:text-white transition-colors">Dining</Link></li>
              <li><Link to="/category/office" className="text-white/80 hover:text-white transition-colors">Office</Link></li>
              <li><Link to="/new-arrivals" className="text-white/80 hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/sale" className="text-white/80 hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-white/80 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/showrooms" className="text-white/80 hover:text-white transition-colors">Showrooms</Link></li>
              <li><Link to="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  123 Furniture Ave, Designville, CA 94103
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-white/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-white/80">support@eleganthome.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70">
            &copy; {year} ElegantHome. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link>
            <Link to="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import Categories from '@/components/Categories';
import Products from '@/components/Products';
import Newsletter from '@/components/Newsletter';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSlider />
        <Categories />
        <Products />
        <div className="bg-furniture-cream py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Craftsmanship & Quality</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We believe that furniture should be as unique as the people who use it. 
              That's why we partner with skilled artisans who create pieces that combine 
              beauty, functionality, and durability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-serif text-primary mb-2">01</div>
                <h3 className="text-xl font-medium mb-2">Sustainably Sourced</h3>
                <p className="text-muted-foreground">We use ethically sourced materials for all our furniture pieces.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-serif text-primary mb-2">02</div>
                <h3 className="text-xl font-medium mb-2">Handcrafted Quality</h3>
                <p className="text-muted-foreground">Every piece is handcrafted with attention to the finest details.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-serif text-primary mb-2">03</div>
                <h3 className="text-xl font-medium mb-2">Timeless Design</h3>
                <p className="text-muted-foreground">We create furniture that stands the test of time in style and durability.</p>
              </div>
            </div>
          </div>
        </div>
        <Newsletter />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

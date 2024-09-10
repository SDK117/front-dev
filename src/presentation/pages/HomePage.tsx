import React from 'react';
import MainLayout from '../components/MainLayout';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutUs from '../components/AboutUs.tsx';
import Promotions from '../components/Promotions.tsx';
import Testimonials from '../components/Testimonials.tsx';

const HomePage: React.FC = () => (
  <MainLayout>
          <HeroSection />
          <FeaturedProducts />
          <AboutUs />
          <Promotions />
          <Testimonials />
  </MainLayout>
);

export default HomePage;

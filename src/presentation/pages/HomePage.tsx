import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutUs from '../components/AboutUs.tsx';
import Promotions from '../components/Promotions.tsx';
import Testimonials from '../components/Testimonials.tsx';

const HomePage: React.FC = () => (
  <>

          <FeaturedProducts />
          <AboutUs />
          <Promotions />
          <Testimonials />
    </>
);

export default HomePage;

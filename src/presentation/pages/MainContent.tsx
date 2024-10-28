import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutUs from '../components/AboutUs';
import Promotions from '../components/Promotions';
import Testimonials from '../components/Testimonials';

const MainContent: React.FC = () => (
  <>
    <FeaturedProducts />
    <AboutUs />
    <Promotions />
    <Testimonials />
  </>
);
export default MainContent;

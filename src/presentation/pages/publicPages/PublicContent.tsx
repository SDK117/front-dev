import React from 'react';
import FeaturedProducts from '../../components/FeaturedProducts.tsx';
import AboutUs from '../../components/AboutUs.tsx';
import Promotions from '../../components/Promotions.tsx';
import Testimonials from '../../components/Testimonials.tsx';

const PublicContent: React.FC = () => (
  <>
    <FeaturedProducts />
    <AboutUs />
    <Promotions />
    <Testimonials />
  </>
);
export default PublicContent;

import React from 'react';
import FeaturedProducts from '../../components/public/FeaturedProducts.tsx';
import AboutUs from '../../components/public/AboutUs.tsx';
import Promotions from '../../components/public/Promotions.tsx';
import Testimonials from '../../components/public/Testimonials.tsx';

const PublicContent: React.FC = () => (
  <>
    <FeaturedProducts />
    <AboutUs />
    <Promotions />
    <Testimonials />
  </>
);
export default PublicContent;

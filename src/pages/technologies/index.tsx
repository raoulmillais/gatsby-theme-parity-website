import React from 'react';
import Layout from '../../components/layouts/Layout';
import HeroPatternTech from '../../components/sections/TechnologyPage/HeroPatternTech';
import GavQoute from '../../components/sections/TechnologyPage/GavQoute';
import FeaturedBlogs from '../../components/FeaturedBlogs';
import Social from '../../components/Social';

export default function TechnologiesPage() {
  return (
    <Layout>
      <HeroPatternTech />
      <GavQoute />
      <FeaturedBlogs />
      <Social />
    </Layout>
  );
}

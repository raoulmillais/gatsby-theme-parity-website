import React from 'react';
import Layout from '../components/layouts/Layout';
import HeroPattern from '../components/sections/SolutionsPage/HeroPattern';
import NewsFeatures from '../components/sections/SolutionsPage/NewsFeatures';
import CustomSolution from '../components/sections/SolutionsPage/CustomSolution';
import ExpertSolutions from '../components/sections/SolutionsPage/ExpertSolutions';
import NextBlockChain from '../components/sections/SolutionsPage/NextBlockchain';
import TeamsBuilding from '../components/sections/SolutionsPage/TeamsBuilding';
import WorkWithUs from '../components/sections/SolutionsPage/WorkWithUs';
import Social from '../components/Social';

export default function SolutionsPage() {
  return (
    <Layout>
      <HeroPattern />
      <NewsFeatures />
      <CustomSolution />
      <ExpertSolutions />
      <NextBlockChain />
      <TeamsBuilding />
      <WorkWithUs />
      <Social />
    </Layout>
  );
}

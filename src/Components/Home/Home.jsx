import React from 'react';
import Hero from './Hero/Hero';
import Feature from './Feature';
import Whychooseus from './Whychooseus';
import Roadmap from './Roadmap';
import TokenAllocation from './TokenAllocation';
import OurTeam from './OurTeam';
import Partner from './Partner';
import LatestBlogs from './LatestBlogs';
import FAQs from './FAQs';

function Home() {
  return (
    <div className="Home">
      <Hero />
      <Feature />
      <Whychooseus />
      <Roadmap />
      <TokenAllocation />
      <OurTeam />
      <Partner />
      <LatestBlogs />
      <FAQs />
    </div>
  );
}

export default Home;

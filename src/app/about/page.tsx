
import React from 'react';
import { FloatingNavDemo } from '@/components/FloatingNav';
import { HeroScrollDemo } from '../../components/conatiner';
import { BackgroundBoxesDemo } from '@/components/build';
import dynamic from 'next/dynamic';
import { ShootingStars } from '@/components/ui/Shooting';
const GlobeDemo = dynamic(() => import('../../components/globe').then((mod) => mod.GlobeDemo), {
  loading: () => <p className='flex justify-center'>Loading Globe...</p>,
  ssr: false // Set to false if you want to avoid server-side rendering for this component
});
import { ShootingStarsAndStarsBackgroundDemo } from '@/components/shooting';
import ProgressBars from '@/components/progress';
import Testo from '@/components/testomonial';
import ScrollToTop from '@/components/Top';
const About = () => {
  return (
    <>
      <div style={{ backgroundColor: "#18181B" }}>
        <BackgroundBoxesDemo />
        <FloatingNavDemo />
        <HeroScrollDemo />
        <ProgressBars />
        <GlobeDemo />
        <Testo />
        <ScrollToTop />
        <ShootingStars />
        <ShootingStarsAndStarsBackgroundDemo />
        
      </div>
    </>
  );
};

export default About;

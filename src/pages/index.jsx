import React from 'react';
import Navigation from '../components/navigation';
import Splash from '../components/splash';
import Experience from '../components/experience';
import Stack from '../components/stack';
import Services from '../components/services';
import content from '../content';
import About from '../components/about';
import ScrollTop from '../components/scrollTop';
import useWindowScrolled from '../hooks/useWindowScrolled';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Navigation content={content} />

      <Splash content={content} />

      <Experience experiences={content.experiences} />

      <Stack primary={content.stack.primary} secondary={content.stack.secondary} />

      <Services services={content.services} />

      <About content={content.about} />

      <ScrollTop scrollStepInPx="50" delayInMs="16.66" isVisible={useWindowScrolled()} />

      <Footer content={content.footer} />
    </>
  );
}

import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Hero from './_components/Hero';
import Skills from './_components/Skills';
import Features from './_components/Features';
import Projects from './_components/Projects';
import Timeline from './_components/Timeline';
import Contact from './_components/Contact';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main>
        <Hero />
        <Skills />
        <Features />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </Layout>
  );
}

import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// @ts-ignore
import * as homeModule from '@site/docs/home.md';

import Hero from './_components/Hero';
import Skills from './_components/Skills';
import Features from './_components/Features';
import Projects from './_components/Projects';
import Timeline from './_components/Timeline';
import Contact from './_components/Contact';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  // home.md 通过 webpack loader 暴露 frontMatter
  const data = (homeModule && (homeModule.frontMatter || homeModule.default?.frontMatter)) || {};

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main>
        <Hero data={data} />
        <Skills data={data} />
        <Features data={data} />
        <Projects data={data} />
        <Timeline data={data} />
        <Contact data={data} />
      </main>
    </Layout>
  );
}

import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';

import Hero from './_components/Hero';
import Skills from './_components/Skills';
import Features from './_components/Features';
import Projects from './_components/Projects';
import Timeline from './_components/Timeline';
import Contact from './_components/Contact';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  // 从 Docusaurus 文档 plugin 的全局数据中读取所有文档元数据
  // docs plugin id 默认为 'default'（单 docs 配置时）
  const allDocs = useAllDocsData();
  const docsData = allDocs?.default?.versions?.[0]?.docs;
  // 找到 id === 'home' 的文档（slug 是 home）
  const homeDoc = docsData?.find((d) => d.id === 'home');

  // 前台渲染用的数据
  const data = homeDoc?.frontMatter || {};

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

import React from 'react';
import Link from '@docusaurus/Link';
import { profile } from '@site/src/data/portfolio';

export default function Hero() {
  return (
    <header className="hero-gradient">
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <h1
          className="hero__title"
          style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            margin: 0,
            color: '#ffffff',
          }}
        >
          Hi, I'm {profile.name}
        </h1>
        <p
          className="hero__subtitle"
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            margin: '12px 0 32px',
          }}
        >
          {profile.title} · {profile.location}
        </p>
        <p
          style={{
            fontSize: 16,
            color: '#c7d2fe',
            maxWidth: 640,
            margin: '0 auto 32px',
            lineHeight: 1.6,
          }}
        >
          {profile.tagline}
        </p>
        <div style={{ marginTop: 24 }}>
          <Link className="cta-button cta-primary" to="/docs/projects/overview">
            查看作品
          </Link>
          <Link className="cta-button cta-ghost" to="/docs/skills">
            我的技能
          </Link>
          <Link className="cta-button cta-ghost" to="/docs/about">
            联系我
          </Link>
        </div>
      </div>
    </header>
  );
}

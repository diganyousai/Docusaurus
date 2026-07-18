import React from 'react';
import Link from '@docusaurus/Link';

export default function Hero({ data = {} }) {
  const {
    hero_name = 'Your Name',
    hero_title = '全栈工程师 · 独立开发者',
    hero_location = '中国',
    hero_tagline = '',
    hero_cta_primary_label = '查看作品',
    hero_cta_primary_to = '/projects/overview',
    hero_cta_secondary_label = '我的技能',
    hero_cta_secondary_to = '/skills',
    hero_cta_tertiary_label = '联系我',
    hero_cta_tertiary_to = '/about',
  } = data;

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
          Hi, I'm {hero_name}
        </h1>
        <p
          className="hero__subtitle"
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            margin: '12px 0 32px',
          }}
        >
          {hero_title}{hero_location ? ` · ${hero_location}` : ''}
        </p>
        {hero_tagline && (
          <p
            style={{
              fontSize: 16,
              color: '#c7d2fe',
              maxWidth: 640,
              margin: '0 auto 32px',
              lineHeight: 1.6,
            }}
          >
            {hero_tagline}
          </p>
        )}
        <div style={{ marginTop: 24 }}>
          <Link className="cta-button cta-primary" to={hero_cta_primary_to}>
            {hero_cta_primary_label}
          </Link>
          <Link className="cta-button cta-ghost" to={hero_cta_secondary_to}>
            {hero_cta_secondary_label}
          </Link>
          <Link className="cta-button cta-ghost" to={hero_cta_tertiary_to}>
            {hero_cta_tertiary_label}
          </Link>
        </div>
      </div>
    </header>
  );
}

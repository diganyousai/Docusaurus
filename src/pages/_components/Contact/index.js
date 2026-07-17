import React from 'react';
import { profile } from '@site/src/data/portfolio';

export default function Contact() {
  return (
    <section
      style={{
        padding: '64px 24px',
        textAlign: 'center',
        maxWidth: 800,
        margin: '0 auto',
      }}
    >
      <h2
        style={{
          fontSize: 32,
          color: '#f0f6fc',
          marginBottom: 8,
        }}
      >
        联系我
      </h2>
      <p
        style={{
          color: '#8b949e',
          marginBottom: 32,
          fontSize: 15,
        }}
      >
        有项目合作、技术交流或只是想打个招呼？
      </p>

      <div
        style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {profile.socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="cta-button cta-ghost"
            style={{ minWidth: 140 }}
          >
            {s.label}
          </a>
        ))}
      </div>

      <p
        style={{
          color: '#484f58',
          fontSize: 13,
          marginTop: 48,
        }}
      >
        © {new Date().getFullYear()} {profile.name} · Built with Docusaurus
      </p>
    </section>
  );
}

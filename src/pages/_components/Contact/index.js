import React from 'react';

export default function Contact({ data = {} }) {
  const {
    contact_title = '联系我',
    contact_subtitle = '',
    contact_email = '',
    contact_github = '',
    contact_socials = [],
  } = data;
  const displayName = data.hero_name || 'Your Name';

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
        {contact_title}
      </h2>
      {contact_subtitle && (
        <p
          style={{
            color: '#8b949e',
            marginBottom: 32,
            fontSize: 15,
          }}
        >
          {contact_subtitle}
        </p>
      )}

      <div
        style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {contact_socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target={s.href?.startsWith('http') ? '_blank' : undefined}
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
        © {new Date().getFullYear()} {displayName} · Built with Docusaurus
      </p>
    </section>
  );
}

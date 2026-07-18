import React from 'react';

const ICONS = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" width="36" height="36" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arch: (
    <svg viewBox="0 0 24 24" fill="none" width="36" height="36" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 24 24" fill="none" width="36" height="36" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 21v-1a6 6 0 0112 0v1M15 21v-1a4 4 0 017-2.5" strokeLinecap="round" />
    </svg>
  ),
};

export default function Features({ data = {} }) {
  const {
    features_title = '我能提供的',
    features_subtitle = '',
    features = [],
  } = data;

  return (
    <section
      style={{
        background: '#010409',
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 32,
            color: '#f0f6fc',
            textAlign: 'center',
            marginBottom: 8,
          }}
        >
          {features_title}
        </h2>
        {features_subtitle && (
          <p
            style={{
              textAlign: 'center',
              color: '#8b949e',
              marginBottom: 40,
              fontSize: 15,
            }}
          >
            {features_subtitle}
          </p>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {features.map((f, i) => (
            <div key={i} className="section-card" style={{ padding: 28 }}>
              <div
                style={{
                  color: 'var(--ifm-color-primary)',
                  marginBottom: 16,
                }}
              >
                {ICONS[f.icon] || ICONS.code}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  color: '#f0f6fc',
                  marginBottom: 12,
                  fontWeight: 600,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  color: '#8b949e',
                  fontSize: 15,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

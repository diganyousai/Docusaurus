import React from 'react';

export default function Timeline({ data = {} }) {
  const {
    timeline_title = '经历',
    timeline_subtitle = '',
    timeline = [],
  } = data;

  return (
    <section
      style={{
        background: '#010409',
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 32,
            color: '#f0f6fc',
            textAlign: 'center',
            marginBottom: 8,
          }}
        >
          {timeline_title}
        </h2>
        {timeline_subtitle && (
          <p
            style={{
              textAlign: 'center',
              color: '#8b949e',
              marginBottom: 40,
              fontSize: 15,
            }}
          >
            {timeline_subtitle}
          </p>
        )}

        <div>
          {timeline.map((item, i) => (
            <div key={i} className="timeline-item">
              <div
                style={{
                  color: 'var(--ifm-color-primary)',
                  fontSize: 13,
                  fontWeight: 600,
                  marginBottom: 4,
                }}
              >
                {item.date}
              </div>
              <h3
                style={{
                  fontSize: 18,
                  color: '#f0f6fc',
                  margin: '0 0 4px',
                  fontWeight: 600,
                }}
              >
                {item.title}
                {item.org && (
                  <span
                    style={{
                      color: '#8b949e',
                      fontSize: 14,
                      fontWeight: 400,
                      marginLeft: 8,
                    }}
                  >
                    · {item.org}
                  </span>
                )}
              </h3>
              <p
                style={{
                  color: '#8b949e',
                  fontSize: 14,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

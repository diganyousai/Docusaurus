import React, { useState } from 'react';
import Link from '@docusaurus/Link';

const PAGE_SIZE = 3;

export default function Projects({ data = {} }) {
  const {
    projects_title = '精选项目',
    projects_subtitle = '',
    projects = [],
  } = data;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const visible = projects.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <section
      style={{
        padding: '64px 24px',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      <h2
        style={{
          fontSize: 32,
          color: '#f0f6fc',
          textAlign: 'center',
          marginBottom: 8,
        }}
      >
        {projects_title}
      </h2>
      {projects_subtitle && (
        <p
          style={{
            textAlign: 'center',
            color: '#8b949e',
            marginBottom: 40,
            fontSize: 15,
          }}
        >
          {projects_subtitle}
        </p>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
          marginBottom: 24,
        }}
      >
        {visible.map((p, i) => (
          <Link key={i} to={p.link || '#'} className="project-card">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 12,
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  color: '#f0f6fc',
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                {p.title}
              </h3>
              {p.status && (
                <span
                  style={{
                    fontSize: 11,
                    background: 'rgba(34, 197, 94, 0.15)',
                    color: '#4ade80',
                    padding: '2px 8px',
                    borderRadius: 4,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {p.status}
                </span>
              )}
            </div>
            <p
              style={{
                color: '#8b949e',
                fontSize: 14,
                lineHeight: 1.6,
                margin: '0 0 16px',
              }}
            >
              {p.desc}
            </p>
            <div>
              {(p.tags || []).map((t, ti) => (
                <span
                  key={ti}
                  style={{
                    display: 'inline-block',
                    background: 'rgba(88, 166, 255, 0.12)',
                    color: '#79c0ff',
                    padding: '2px 8px',
                    borderRadius: 4,
                    fontSize: 11,
                    marginRight: 4,
                    marginBottom: 4,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 6,
                border: '1px solid #30363d',
                background: i === page ? 'var(--ifm-color-primary)' : 'transparent',
                color: i === page ? '#ffffff' : '#8b949e',
                cursor: 'pointer',
                fontSize: 13,
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

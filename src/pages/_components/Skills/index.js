import React, { useState } from 'react';
import { skills } from '@site/src/data/portfolio';

export default function Skills() {
  const [active, setActive] = useState(null);

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
        技能栈
      </h2>
      <p
        style={{
          textAlign: 'center',
          color: '#8b949e',
          marginBottom: 40,
          fontSize: 15,
        }}
      >
        5 年积累的技术能力，按方向分组
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
        }}
      >
        {skills.map((group, gi) => (
          <div
            key={gi}
            className="section-card"
            style={{ padding: 20 }}
          >
            <h3
              style={{
                fontSize: 14,
                color: 'var(--ifm-color-primary)',
                textTransform: 'uppercase',
                letterSpacing: 1,
                marginBottom: 16,
                fontWeight: 600,
              }}
            >
              {group.category}
            </h3>
            <div>
              {group.items.map((item, ii) => (
                <span
                  key={ii}
                  className="skill-tag"
                  onClick={() => setActive(item === active ? null : item)}
                  style={
                    active === item
                      ? {
                          background: 'rgba(99, 102, 241, 0.4)',
                          color: '#ffffff',
                          borderColor: 'var(--ifm-color-primary)',
                        }
                      : undefined
                  }
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

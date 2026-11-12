import React from 'react';
import SectionLabel from './SectionLabel';
import './PageHeader.css';

export default function PageHeader({
  eyebrow,
  eyebrowNumber,
  title,
  description,
  badgeText,
  badgeType = 'teal',
  children,
}) {
  return (
    <div className="page-header-block">
      <div className="container">
        <div className="page-header-content">
          <div className="page-header-eyebrow-row">
            {eyebrow && <SectionLabel number={eyebrowNumber} text={eyebrow} />}
            {badgeText && (
              <span className={`badge badge-${badgeType} page-header-badge`}>
                <span className="badge-dot" aria-hidden="true" />
                <span>{badgeText}</span>
              </span>
            )}
          </div>
          <h1 className="page-header-title">{title}</h1>
          {description && <p className="page-header-desc">{description}</p>}
          {children && <div className="page-header-actions">{children}</div>}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './LogoLoop.css';

const LogoLoop = ({
  logos = [],
  speed = 60,
  direction = 'left',
  logoHeight = 28,
  gap = 80,
  hoverSpeed = 0,
  fadeOut = true,
  fadeOutColor = '#09090B',
  scaleOnHover = true,
  ariaLabel = 'Companies our engineers come from'
}) => {
  // Duplicate logos once for a 50% loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div 
      className={`logoloop ${fadeOut ? 'logoloop--fade' : ''} ${scaleOnHover ? 'logoloop--scale-hover' : ''}`}
      style={{
        '--speed': `${speed}s`,
        '--direction': direction === 'left' ? 'normal' : 'reverse',
        '--gap': `${gap}px`,
        '--logo-height': `${logoHeight}px`,
        '--fade-color': fadeOutColor,
      }}
      aria-label={ariaLabel}
    >
      <div className="logoloop__inner">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="logoloop__item" title={logo.title}>
            {logo.node}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;

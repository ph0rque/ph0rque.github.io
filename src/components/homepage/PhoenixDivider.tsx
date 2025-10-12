import { useState, useEffect } from 'react';

export default function PhoenixDivider() {
  const [scrolled, setScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const root = document.querySelector('[data-component="split-screen"]');
      if (!root) return;
      const leftPane = root.querySelector<HTMLDivElement>('[data-pane="left"]');
      const rightPane = root.querySelector<HTMLDivElement>('[data-pane="right"]');

      const scrollY = window.scrollY || leftPane?.scrollTop || rightPane?.scrollTop || 0;
      const shouldShrink = scrollY > 100;

      if (shouldShrink !== scrolled) {
        setScrolled(shouldShrink);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 400);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className="phoenix-logo-container"
      style={{
        position: 'fixed',
        top: scrolled ? '40px' : '50%',
        left: '50%',
        transform: scrolled
          ? 'translate(-50%, -50%) scale(0.3)'
          : 'translate(-50%, -50%) scale(1)',
        transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: isAnimating ? 'transform' : 'auto',
        zIndex: scrolled ? 50 : 10,
        pointerEvents: 'none',
      }}
    >
      <img
        src="/phoenix-logo.png"
        alt="Andrew Shindyapin - Phoenix Logo"
        style={{
          width: scrolled ? 'auto' : '20vw',
          height: scrolled ? '60px' : 'auto',
          maxWidth: scrolled ? 'none' : '400px',
          filter: 'drop-shadow(0 4px 12px rgba(255, 123, 61, 0.3))',
        }}
      />
    </div>
  );
}


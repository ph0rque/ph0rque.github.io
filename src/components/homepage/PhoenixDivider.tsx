import { useState, useEffect } from 'react';

interface PhoenixDividerProps {
  scrolled: boolean;
}

export default function PhoenixDivider({ scrolled }: PhoenixDividerProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (scrolled !== isAnimating) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 400);
      return () => clearTimeout(timer);
    }
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


import { useRef, useState, useEffect, type ReactNode } from 'react';
import '../../styles/homepage.css';
import PhoenixDivider from './PhoenixDivider';

interface SplitScreenLayoutProps {
  children: ReactNode;
}

export default function SplitScreenLayout({ children }: SplitScreenLayoutProps) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position for logo animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || 
                     leftRef.current?.scrollTop || 
                     rightRef.current?.scrollTop || 
                     0;
      setScrolled(scrollY > 100);
    };

    // Listen to window scroll (mobile) and pane scrolls (desktop)
    window.addEventListener('scroll', handleScroll, { passive: true });
    const leftEl = leftRef.current;
    const rightEl = rightRef.current;
    leftEl?.addEventListener('scroll', handleScroll, { passive: true });
    rightEl?.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      leftEl?.removeEventListener('scroll', handleScroll);
      rightEl?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Synchronized scrolling
  const syncScroll = (source: 'left' | 'right') => {
    if (isScrolling || window.innerWidth < 1024) return;
    
    setIsScrolling(true);
    requestAnimationFrame(() => {
      if (source === 'left' && leftRef.current && rightRef.current) {
        rightRef.current.scrollTop = leftRef.current.scrollTop;
      } else if (source === 'right' && leftRef.current && rightRef.current) {
        leftRef.current.scrollTop = rightRef.current.scrollTop;
      }
      setIsScrolling(false);
    });
  };

  // Extract children into left and right
  const childArray = Array.isArray(children) ? children : [children];
  const leftContent = childArray[0];
  const rightContent = childArray[1];

  return (
    <>
      <PhoenixDivider scrolled={scrolled} />
      <div className="split-screen-container">
        {/* Left Pane */}
        <div 
          ref={leftRef}
          className="split-pane left-pane"
          onScroll={() => syncScroll('left')}
        >
          {leftContent}
        </div>

        {/* Logo Divider (Desktop only) */}
        <div className="logo-divider-column" />

        {/* Right Pane */}
        <div 
          ref={rightRef}
          className="split-pane right-pane"
          onScroll={() => syncScroll('right')}
        >
          {rightContent}
        </div>
      </div>
    </>
  );
}


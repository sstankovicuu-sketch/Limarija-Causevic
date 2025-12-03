import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

export const AnimatedCounter = ({ value, duration = 2000 }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Extract numeric part and suffix (e.g., "2500+" -> 2500, "+")
    const numericMatch = value.match(/^(\d+)/);
    const suffix = value.replace(/^\d+/, '');
    
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const endValue = parseInt(numericMatch[1], 10);
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * endValue);
      
      setDisplayValue(currentValue + suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
};

import React, { useEffect, useState } from 'react';
import { useDirectionStore } from '../lib/useDirectionStore';

type FlyInFromBottomProps = {
  children: React.ReactNode;
  delayMs?: number;
};

const FlyInFromBottom: React.FC<FlyInFromBottomProps> = ({ children, delayMs = 200 }) => {
  const [visible, setVisible] = useState(false);
  const { direction } = useDirectionStore();

  useEffect(() => {
    // Add 300ms extra delay when sliding from right to left (direction === 'left')
    const totalDelay = direction === 'right' ? delayMs + 500 : delayMs;
    const timer = setTimeout(() => setVisible(true), totalDelay);
    return () => clearTimeout(timer);
  }, [delayMs, direction]);

  // Determine animation based on direction
  const getTransformClasses = () => {
    if (direction === 'left') {
      // Moving right, so slide in from left
      return visible 
        ? 'translate-x-0 opacity-100' 
        : '-translate-x-12 opacity-0';
    } else {
      // Moving left, so slide in from right
      return visible 
        ? 'translate-x-0 opacity-100' 
        : 'translate-x-12 opacity-0';
    }
  };

  return (
    <div
      className={`transition-all duration-700 ease-out transform ${getTransformClasses()}`}
    >
      {children}
    </div>
  );
};

export default FlyInFromBottom;
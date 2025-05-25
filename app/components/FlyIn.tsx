import React, { useEffect, useState } from 'react';

import { useDirectionStore } from '../lib/useDirectionStore'; 

type FlyInFromBottomProps = {
  children: React.ReactNode;
  delayMs?: number;

};

const FlyInFromBottom: React.FC<FlyInFromBottomProps> = ({ children, delayMs = 0 }) => {
  const [visible, setVisible] = useState(false);
  const { direction } = useDirectionStore(); // Still using it, but 'direction' won't affect the 'bottom' animation.

  useEffect(() => {

    setVisible(false); 

    const totalDelay = delayMs;
    const resetDelay = 10; 

    const timer = setTimeout(() => {
      setVisible(true);
    }, totalDelay + resetDelay);

    return () => clearTimeout(timer);
  }, [delayMs, direction]); // Added 'direction' to dependencies to re-trigger animation if direction changes

  // Determine animation based on the component's name: "FlyInFromBottom"
  // It will always slide in from the bottom.
  const getTransformClasses = () => {
    return visible 
      ? 'translate-y-0 opacity-100' // End state: fully visible, no vertical translation
      : 'translate-y-12 opacity-0'; // Start state: moved down by 12 units (e.g., 3rem in Tailwind), fully transparent
  };

  return (
    <div
      // Increased duration for a more noticeable "fly-in" effect.
      // Used 'ease-out' for a smooth deceleration.
      className={`transition-all duration-300 ease-out transform ${getTransformClasses()}`}
    >
      {children}
    </div>
  );
};

export default FlyInFromBottom;

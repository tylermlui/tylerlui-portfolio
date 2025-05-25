import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { useDirectionStore } from '../lib/useDirectionStore';

const transition = <P extends object>(OgComponent: ComponentType<P>) => {
  const MotionWrapper = (props: P) => {
    const { direction } = useDirectionStore();
    const isLeftToRight = direction === 'right';
    
    return (
      <>
        {/* Slide In - direction-based reveal */}
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-white"
          style={{ 
            originX: isLeftToRight ? 1 : 0 // left origin for L->R, right origin for R->L
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 3, ease: [0.42, 0, 1, 1] }}
        />
        
        {/* Page Content */}
        <OgComponent {...props} />
        
        {/* Slide Out - direction-based cover */}
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-black"
          style={{ 
            originX: isLeftToRight ? 0 : 1 // right origin for L->R, left origin for R->L
          }}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    );
  };
  
  return MotionWrapper;
};

export default transition;
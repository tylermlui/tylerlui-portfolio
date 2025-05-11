import { motion } from "framer-motion";
import type { ComponentType } from "react";

const transition = <P extends object>(OgComponent: ComponentType<P>) => {
  const MotionWrapper = (props: P) => {
    return (
      <>
        {/* Slide In (bottom to top reveal) */}
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-white origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 3, ease: [0.42, 0, 1, 1] }}
        />

        {/* Page Content */}
        <OgComponent {...props} />

        {/* Slide Out (bottom to top cover) */}
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-black origin-top"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    );
  };

  return MotionWrapper;
};

export default transition;

 
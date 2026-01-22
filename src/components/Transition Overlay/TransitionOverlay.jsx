import { motion, AnimatePresence, spring } from "framer-motion";
import { useLocation } from "react-router-dom";

const variants = {
  inital: {
    y: "100vh",
  },
  enter: {
    y: 0,
    transition: {
      type: spring,
      stiffness: 120,
      damping: 18,
      mass: 1,
    },
  },
  exit: {
    y: "100vh",
    transition: {
      type: spring,
      stiffness: 120,
      damping: 18,
      mass: 1,
    },
  },
};
const TransitionOverlay = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="transition-overlay"
        variants={variants}
        initial="inital"
        animate="enter"
        exit="exit"
      >
        <div className="overlay-content">Sketching Time!</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionOverlay;

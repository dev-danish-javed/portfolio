import { motion, AnimatePresence, isVisible } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

const PageLayout = ({ children }) => children;
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "spring",
  ease: "linear",
  duration: 0.5,
};
const App_Animation_Layout = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout>
      <AnimatePresence>
        <motion.div
          key={pathname}
          initial={{ x: -3000 }}
          animate={{ x: 0 }}
          exit={{ x: -3000 }}
          transition={{ duration: 2 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </PageLayout>
  );
};
export default App_Animation_Layout;

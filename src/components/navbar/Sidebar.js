import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AccentContext } from "../../App";

function Sidebar({ children, handler }) {
  const accent = useContext(AccentContext);
  return (
    <>
      <AnimatePresence>
        {handler && (
          <div
            className="sidebar-overlay"
          >
            <motion.aside
              initial={{ x: "100vw" }}
              animate={{ x: "0vw" }}
              transition={{ type: "tween" }}
              exit={{ x: "100vw" }}
            >
              <ul className="font-lg">
                {children}
                <li>
                  <button
                    className={`btn btn-outlined-${accent} font-lg mt-2 fontfam-cont`}
                  >
                    Resume
                  </button>
                </li>
              </ul>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Sidebar;

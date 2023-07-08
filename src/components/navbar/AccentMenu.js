import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AccentContext } from "../../App";

const accents = [
  "secondary",
  "info",
  "error",
  "blue",
  "green",
  "purple",
];

function AccentMenu({ accentPicker }) {
  const [openMenu, setOpenMenu] = useState(false);
  const accent = useContext(AccentContext);

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div
        className="accent-btn font-md p-1 display-i-b"
        onClick={openMenuHandler}
      >
        <span>Theme</span>
        <div className={`bg-${accent}`}></div>
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            className="accent-pallete bg-primary-light-1 p-1"
            initial={{ x: "-100vw" }}
            animate={{ x: "0px" }}
            exit={{ x: "-100vw" }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            {accents.map((color, index) => (
              <div
                key={index}
                className={`bg-${color} display-i-b mt-2`}
                onClick={() => {
                  accentPicker(color);
                  openMenuHandler();
                }}
              ></div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AccentMenu;

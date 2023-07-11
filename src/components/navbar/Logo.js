import { motion } from "framer-motion";

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="40"
    >
      <text
        id="secondM"
        x="5"
        y="40"
        fontWeight="bold"
        fontSize="40"
        fill="gray"
      >
        M
        <animate
          attributeName="fill"
          dur="1s"
          fill="freeze"
          from="black"
          to="#aaa"
        />
      </text>
      <motion.text
        id="firstM"
        x="5"
        y="40"
        fontWeight="bold"
        fontSize="40"
        fill="white"
        style={{ zIndex: "2" }}
        initial={{x: "0px", y: "0px"}}
        whileHover={{x: "5px", y: "-4px"}}
        transition={{type: "tween"}}
      >
        M
      </motion.text>
    </svg>
  );
};

export default Logo;

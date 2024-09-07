import { motion } from "framer-motion";

const ProgressBar = ({ scrollYProgress }) => {
  return (
    <div className="fixed top-0 right-[10%] h-full w-4 bg-gray-300">
      <motion.div className="bg-blue-500 w-full" style={{ height: "100%" }} />
      hi
      <motion.div
        className="absolute top-0 right-0 h-full w-4 bg-gray-400"
        style={{
          height: "100%", // Full height
        }}
      />
      dbf
    </div>
  );
};

export default ProgressBar;

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const Loading = ({ setIsLoading }) => {
  const progress = useMotionValue(0);
  const [timeProgress, setTimeProgress] = useState(0);
  const opacity = useTransform(progress, [0, 1], [0, 1]);
  useEffect(() => {
    const id = setInterval(() => {
      setTimeProgress(100);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);
  setTimeout(() => {
    setIsLoading(false);
  }, 5000);
  return (
    <motion.div className="loadingFrame">
      <motion.div
        className="loadingCenter"
      >
        <motion.h1 style={{ opacity, color: "rgba(255,255,255,1)" }}
                animate={{
                  opacity: [1, 0, 1],
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
        >Loading...</motion.h1>
        <motion.div className='progressBar'
          >
            <motion.div className='bar'
              initial={{opacity:0}}
              animate={{
                width:`${timeProgress}%`,
                opacity:1
              }}
              transition={{
                duration:2
              }}
            />
          </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loading;

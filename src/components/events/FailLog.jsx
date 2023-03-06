
import { motion } from "framer-motion";
import SignUpBackDrop from './SignUpBackDrop';

const FailLog = ({ handleClose }) => {
  return (
    <SignUpBackDrop onClick={handleClose}>
      <motion.div
        className="infoSuccessfulLog"
        initial={{ scale: 0.5 }}
        animate={{ scale: [1.5, 1] }}
        exit={{ scale: 0.5 }}
        transition={{
          type: "spring",
          duration: 0.5,
        }}
      >
        Login Fail
      </motion.div>
    </SignUpBackDrop>
  );
};

export default FailLog;

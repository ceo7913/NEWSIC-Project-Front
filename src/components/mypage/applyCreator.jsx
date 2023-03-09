
import React from 'react'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';
const ApplyCreator = () => {
  const nav =useNavigate()
  const toCreator = () => nav("NEWSIC-Project-Front/creator")
  return(
      <div className="firstMyPage">
        <div className="myPageFirstContainerFrame">
          <div className="leftSection">
            <div className="textSection">
              <div>Anyone can be a creator!</div>
              <div>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>
              <div>0.1 ETH</div>
            </div>
            <div
              className="buttonFrame"
              onClick={toCreator}
            >
              Go to Creator Now
            </div>
          </div>
          <div className="rightSection">
            <motion.div className="lineUp" initial={{ opacity: 0, rotateY: -120, x: 200 }} animate={{ opacity: 1, rotateY: 0, x: 0 }} transition={{ duration: 1 }} style={{ cursor: "pointer" }} whileHover={{ x: 70, y: 50 }} />
            <div className="lineDown" />
          </div>
        </div>
      </div>
  )
};

export default ApplyCreator;

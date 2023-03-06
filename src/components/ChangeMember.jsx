import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MypageBackDrop from './events/MypageBackDrop';


const dropIn = {
  hidden: {
    x: "100vh",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    x: "100vh",
    opacity: 0,
  },
};
//   <motion.label
//   className='lyricsSource' for="lyricsSource"
//   whileHover={{
//       scale:0.9
//   }}
//   >
//      + 가사 첨부하기
//  </motion.label>
//  <input type="file" className='lyricsSource' id='lyricsSource' style={{display:"none"}}/>

const ChangeMember = ({ handleClose, text }) => {
  const [userImage, setUserImage] = useState();

  const changeProfile = () => {
    const formData = new FormData();
    formData.append("image", userImage);
  };

  const profileImageHandler = async (e) => {
    console.log("클릭이벤트", e);
    e.preventDefault();

    if (e.target.files) {
      const imgData = e.target.files[0];
      console.log(imgData);
      setUserImage(imgData);
    }
  };

  return (
    <MypageBackDrop onClick={handleClose}>
      <motion.div onClick={(e) => e.stopPropagation()} className="changeUserInfoFrame" variants={dropIn} initial="hidden" animate="visible" exit="exit">
        <div className="changeNavBar">
          <div
            className="successBtn"
            onClick={() => {
              changeProfile();
              handleClose();
            }}
          >
            완료
          </div>
          <div className="infoText">회원정보 변경</div>
        </div>
        <div className="middleLine" />
        <div className="changeMainSection">
          <label className="imgChange" for="imgChange">
            <FontAwesomeIcon icon={faCamera} className="faCamera" />
            <input type="file" name="file" accept="image/*" className="imgChange" id="imgChange" onChange={profileImageHandler} style={{ display: "none" }} />
          </label>
          <img className="userImg" src={`https://gyeongil-newsic-2team-bucket.s3.ap-northeast-3.amazonaws.com/${userImage}`} alt="userImg" width={300} height={300} />
          <motion.span
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <input className="userNickName" placeholder="현재 닉네임" />
          </motion.span>
        </div>
      </motion.div>
    </MypageBackDrop>
  );
};

export default ChangeMember;

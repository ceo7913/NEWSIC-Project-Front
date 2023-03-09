
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// 컴포넌트
const UserBar = ({ handleOpen, handleClick }) => {
  const nav =useNavigate()
  const toSignUp = () => nav("/signup")
  const toMyPage = () => nav("/mypage")
  return (
    <div className="userBarSection">
        <div className="optionSection">
          <motion.div className="changeMemberInfo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} onClick={handleOpen}>
            회원정보 변경
          </motion.div>
        </div>
          <div className="userInfoSection">
            <div className='userImage'/>
            <div className="creatorTicket" />
              <div className='userProfile'>
                <div className='userName'>UserName</div>
                <div className='userEmail'>User@Email.com</div>
              </div>
              <motion.div 
            className='metaConnectButton'
            whileHover={{
              scale:[1,1.1],
              color:"rgba(255, 255, 255, 1)"
            }}
            whileTap={{ scale: 0.9 }}
            onClick={toSignUp}
            >MetaMask Connect</motion.div>
          </div>
        <div className="stateInfoSection" onClick={handleClick}></div>
        <div className="anotherInfoSection">
        <motion.div
          transition={{ ease:[0.44,0,0.56,1], stiffness: 500, damping: 60 , mass:1, duration:0.3}}
          whileTap={{ scale: 0.9 }}
        className='menuItem' onClick={toMyPage}>MY PAGE</motion.div>
        </div>
    </div>
  );
};
export default UserBar;

// import { useRef, useState } from "react";
// import { ChangeMember, MusicPlayer, PlayBar, SearchBar, SideBar, UserBar, VolumeBox } from "../components";
// import { AnimatePresence, motion } from "framer-motion";
// import Loading from './events/Loading';
// import Congratulations from './events/Congratulations';


// const Layout = (props) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSoundClick, setIsSoundClick] = useState(false);
//   const [isPlayerClick, setIsPlayerClick] = useState(false);
//   const [switchState, setSwitchState] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);
//   const close = () => setModalOpen(false);
//   const open = () => setModalOpen(true);
//   const layOutRef = useRef(null);
//   //====================================================
//   const [isClick, setIsClick] = useState(false);
//   const handleClick = () => {
//     setIsClick(!isClick);
//     //====================================================
//   };

//   const soundClick = () => {
//     setIsSoundClick(!isSoundClick);
//   };
//   const playerClick = () => {
//     setIsPlayerClick(!isPlayerClick);
//   };
//   return (
//     <>
//       {isLoading ? (
//         <Loading setIsLoading={setIsLoading} />
//       ) : (
//         <motion.div>
//           <motion.div className="layoutFrame" ref={layOutRef}>
//             {/* ========================================================== */}
//             {isClick ? <Congratulations isClick={isClick} /> : null}
//             {/* ========================================================== */}
//             {isSoundClick ? <VolumeBox /> : null}
//             <MusicPlayer layOutRef={layOutRef} isPlayerClick={isPlayerClick} playerClick={playerClick} />
//             <AnimatePresence>{modalOpen && <ChangeMember modalOpen={modalOpen} handleClose={close} />}</AnimatePresence>
//             <div className="layoutBox">
//               <SideBar />
//               <PlayBar soundClick={soundClick} playerClick={playerClick} isPlayerClick={isPlayerClick} />
//               <div className="contentSection">
//                 <SearchBar />
//                 <div className="content">
//                   {props.children}
//                 </div>
//               </div>
//               <UserBar handleOpen={open} handleClick={handleClick} />
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default Layout;

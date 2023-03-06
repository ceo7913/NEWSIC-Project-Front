import './styles/App.min.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { useState,useRef } from 'react';
import { ChangeMember, Congratulations, Loading, MusicPlayer, PlayBar, SearchBar, SideBar, UserBar, VolumeBox } from './components';
import { AnimatePresence,motion } from 'framer-motion';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSoundClick, setIsSoundClick] = useState(false);
  const [isPlayerClick, setIsPlayerClick] = useState(false);
  const [switchState, setSwitchState] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const layOutRef = useRef(null);
  //====================================================
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
    //====================================================
  };

  const soundClick = () => {
    setIsSoundClick(!isSoundClick);
  };
  const playerClick = () => {
    setIsPlayerClick(!isPlayerClick);
  };
  return (
    <div className="App">
      <BrowserRouter>
      {isLoading ? (
        <Loading setIsLoading={setIsLoading} />
      ) : (
        <motion.div>
          <motion.div className="layoutFrame" ref={layOutRef}>
            {/* ========================================================== */}
            {isClick ? <Congratulations isClick={isClick} /> : null}
            {/* ========================================================== */}
            {isSoundClick ? <VolumeBox/> : null}
            <MusicPlayer layOutRef={layOutRef} isPlayerClick={isPlayerClick} playerClick={playerClick} />
            <AnimatePresence>{modalOpen && <ChangeMember modalOpen={modalOpen} handleClose={close} />}</AnimatePresence>
            <div className="layoutBox">
              <SideBar />
              <PlayBar soundClick={soundClick} playerClick={playerClick} isPlayerClick={isPlayerClick} />
              <div className="contentSection">
                <SearchBar />
                <div className="content">
                  <Router/>
                </div>
              </div>
              <UserBar handleOpen={open} handleClick={handleClick} />
            </div>
          </motion.div>
        </motion.div>
      )}
      </BrowserRouter>
    </div>
  );
}
export default App;
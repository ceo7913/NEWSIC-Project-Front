import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate, useRoutes } from "react-router-dom";

// 컴포넌트
const SideBar = () => {
  const nav =useNavigate()
  // const location = useLocation(); 
  // const {id,job} = location.state;
  // const toProject = ()=>nav("/project", {
  //   state :{
  //     id: 1,
  //     job: '개발자'
  //   }
  // // })
  // const toProject = () => nav("/project")
  const toHome = () => nav("NEWSIC-Project-Front/")
  const toFund = () => nav("NEWSIC-Project-Front/fund")
  const toNft = () => nav("NEWSIC-Project-Front/nft")
  const toMusic = () => nav("NEWSIC-Project-Front/music")
  const toSiteInfo = () => nav("NEWSIC-Project-Front/siteinfo")
  const toSubScription = () => nav("NEWSIC-Project-Front/subscription")
  // ----------------------------------
  return (
    <div className="sideBarSection">
      <div className="iconBar">
        <div className="buttonList">
          <div className="iconButton"></div>
        </div>
      </div>
      <div className="categories">
        <div
          className="headerSection"
          onClick={toHome}
        >
          NEWSIC
        </div>
        <div className='menuSection'>
        <motion.div
          whileHover={{ 
            y:-1.5,
            boxShadow: "0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0), 0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996), 0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815), 0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017), 0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875), 0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975), 0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374), 0px 100px 100px 0px rgba(0, 0, 0, 0.25)",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "25px",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
          transition={{ ease:[0.44,0,0.56,1], stiffness: 500, damping: 60 , mass:1, duration:0.3}}
          whileTap={{ scale: 0.9 }}
        className='menuItem' onClick={toFund}>FUNDING</motion.div>
        <motion.div
            whileHover={{ 
            y:-1.5,
            boxShadow: "0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0), 0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996), 0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815), 0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017), 0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875), 0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975), 0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374), 0px 100px 100px 0px rgba(0, 0, 0, 0.25)",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "25px",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
          transition={{ ease:[0.44,0,0.56,1], stiffness: 500, damping: 60 , mass:1, duration:0.3}}
          whileTap={{ scale: 0.9 }}
        className='menuItem' onClick={toNft}>NFT MARKET</motion.div>
        <motion.div
            whileHover={{ 
            y:-1.5,
            boxShadow: "0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0), 0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996), 0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815), 0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017), 0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875), 0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975), 0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374), 0px 100px 100px 0px rgba(0, 0, 0, 0.25)",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "25px",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
          transition={{ ease:[0.44,0,0.56,1], stiffness: 500, damping: 60 , mass:1, duration:0.3}}
          whileTap={{ scale: 0.9 }}
        className='menuItem' onClick={toMusic}>MUSIC</motion.div>
        <motion.div
            whileHover={{ 
            y:-1.5,
            boxShadow: "0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0), 0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996), 0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815), 0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017), 0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875), 0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975), 0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374), 0px 100px 100px 0px rgba(0, 0, 0, 0.25)",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "25px",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
          transition={{ ease:[0.44,0,0.56,1], stiffness: 500, damping: 60 , mass:1, duration:0.3}}
          whileTap={{ scale: 0.9 }}
        className='menuItem' onClick={toSiteInfo}>SITE INFO</motion.div>
        <motion.div
            whileHover={{ 
            y:-1.5,
            boxShadow: "0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0), 0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996), 0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815), 0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017), 0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875), 0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975), 0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374), 0px 100px 100px 0px rgba(0, 0, 0, 0.25)",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "25px",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
          transition={{ ease:[0.44,0,0.56,1], stiffness: 500, damping: 60 , mass:1, duration:0.3}}
          whileTap={{ scale: 0.9 }}
        className='menuItem' onClick={toSubScription}>SUBSCRIPTIONS</motion.div>
      </div>
      </div>
    </div>
  );
};

export default SideBar;

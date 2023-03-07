// 일반음원 인기차트
import { motion } from "framer-motion";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import ironImg from "../../image/IRON.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const topChartItem = [
  {
    img: ironImg,
    rank: 1,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: ironImg,
    rank: 2,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: ironImg,
    rank: 3,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: ironImg,
    rank: 4,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: ironImg,
    rank: 5,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: ironImg,
    rank: 6,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: ironImg,
    rank: 7,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: ironImg,
    rank: 8,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: ironImg,
    rank: 9,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
];

const NormalMusicTop100 = () => {
  const nav =useNavigate()
  const toSongDetail = () => nav("detail")
  return (
    <div className="topChartSection">
      <motion.div className="topChartList">
        {topChartItem.map((item) => (
          <div className="musicTopItemBox" onClick={toSongDetail}>
            <div className="leftSection">
              <img src={item.img} alt="" className="musicTopItemImg" />
              <div className="musicInfoFrame">
                <div className="musicName">{item.musicName}</div>
                <div className="singerName">{item.singerName}</div>
              </div>
            </div>
            <div className="rightSection">
              <div className="takeListButton">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NormalMusicTop100;

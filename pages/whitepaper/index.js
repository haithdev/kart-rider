import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import RoadMap from "components/SectionRoadMap";
import SectionBuild from "components/SectionBuild";
import SectionBuildGem from "components/SectionBuildGem";
import SectionAboutUs from "components/SectionAboutUs";
import SectionTokenomic from "components/SectionTokenomic";
import HeaderCustom from "components/HeaderCustom";

const propTypes = {};

const WhitePaper = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function
  const listImage = [
    {
      id: 1,
      src: "/static/assets/img/white-page/white-paper-1.png",
    },
    {
      id: 2,
      src: "/static/assets/img/white-page/white-paper-2.png",
    },
    {
      id: 3,
      src: "/static/assets/img/white-page/white-paper-3.png",
    },
    {
      id: 4,
      src: "/static/assets/img/white-page/white-paper-4.png",
    },
    {
      id: 5,
      src: "/static/assets/img/white-page/white-paper-5.png",
    },
    {
      id: 6,
      src: "/static/assets/img/white-page/white-paper-6.png",
    },
    {
      id: 7,
      src: "/static/assets/img/white-page/white-paper-7.png",
    },
    {
      id: 8,
      src: "/static/assets/img/white-page/white-paper-8.png",
    },
    {
      id: 9,
      src: "/static/assets/img/white-page/white-paper-9.png",
    },
    {
      id: 10,
      src: "/static/assets/img/white-page/white-paper-10.png",
    },
    {
      id: 11,
      src: "/static/assets/img/white-page/white-paper-11.png",
    },
    {
      id: 12,
      src: "/static/assets/img/white-page/white-paper-12.png",
    },
  ];
  //! Render
  return (
    <div className="whitepaper-container">
      <HeaderCustom />
      <div className="whitepaper-section">
        {listImage.map((item) => (
          <div key={item.id} className="white-paper-item">
            <img src={item.src} alt="each-char" />
          </div>
        ))}
      </div>
    </div>
  );
  e;
};

WhitePaper.propTypes = propTypes;
export default WhitePaper;

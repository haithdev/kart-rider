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

  //! Render
  return (
    <div className="whitepaper-container">
      <HeaderCustom />
      <div className="whitepaper-section">
        <SectionAboutUs />
        <RoadMap />
        <SectionTokenomic />
        <SectionBuild />
        <SectionBuildGem />
      </div>
    </div>
  );
  e;
};

WhitePaper.propTypes = propTypes;
export default WhitePaper;

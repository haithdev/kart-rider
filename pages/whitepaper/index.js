import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import RoadMap from "components/SectionRoadMap";
import SectionBuild from "components/SectionBuild";
import SectionBuildGem from "components/SectionBuildGem";
import SectionAboutUs from "components/SectionAboutUs";
import SectionTokenomic from "components/SectionTokenomic";

const propTypes = {};

const WhitePaper = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <>
      <SectionAboutUs />
      <RoadMap />
      <SectionTokenomic />
      <SectionBuild />
      <SectionBuildGem />
    </>
  );
};

WhitePaper.propTypes = propTypes;
export default WhitePaper;

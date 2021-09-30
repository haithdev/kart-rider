import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

const propTypes = {
  label: PropTypes.string.isRequired,
};

const TitleWithFrames = ({ label = "" }) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="hh-label-frames">
      <img src="/static/assets/img/Button-frames/build-frames.png" alt="" />
      <h3>{label}</h3>
    </div>
  );
};

TitleWithFrames.propTypes = propTypes;
export default TitleWithFrames;

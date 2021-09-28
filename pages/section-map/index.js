import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

const propTypes = {};

const SectionMap = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="section-map">
      <h3>MAP</h3>
    </div>
  );
};

SectionMap.propTypes = propTypes;
export default SectionMap;

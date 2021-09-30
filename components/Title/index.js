import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

const propTypes = {
  label: PropTypes.string.isRequired,
};

const Title = ({ label = "" }) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="hh-label">
      <h3>{label}</h3>
    </div>
  );
};

Title.propTypes = propTypes;
export default Title;

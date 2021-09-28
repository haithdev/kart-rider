import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

const propTypes = {};

const SectionCar = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="section-car">
      <h3>XE ĐUA</h3>
    </div>
  );
};

SectionCar.propTypes = propTypes;
export default SectionCar;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

const propTypes = {};

const SectionCharacter = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="section-character">
      <h3>NHÂN VẬT</h3>
    </div>
  );
};

SectionCharacter.propTypes = propTypes;
export default SectionCharacter;

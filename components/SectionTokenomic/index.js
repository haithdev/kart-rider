import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

const propTypes = {};

const SectionTokenomic = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="section-about-container">
      <div className="section-about-introduction">
        <h3>INTRODUCTION</h3>
        <p>Stable Token</p>
        <p>Symbol: FC</p>
        <p>Total supply: Unlimited</p>
        <h4>WHAT IF FC TOKEN?</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h4>HOW TO EARN AND USE FC USED FOR?</h4>
      </div>
    </div>
  );
};

SectionTokenomic.propTypes = propTypes;
export default SectionTokenomic;

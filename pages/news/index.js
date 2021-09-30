import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SectionNews from "components/SectionNews";
import HeaderCustom from "components/HeaderCustom";

const propTypes = {};

const News = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="whitepaper-container">
      <HeaderCustom />
      <div className="whitepaper-section">
        <SectionNews />
      </div>
    </div>
  );
};

News.propTypes = propTypes;
export default News;

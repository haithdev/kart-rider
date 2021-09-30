import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SectionNews from "components/SectionNews";

const propTypes = {};

const News = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return <SectionNews />;
};

News.propTypes = propTypes;
export default News;

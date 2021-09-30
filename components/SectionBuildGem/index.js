import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import TitleWithFrames from "components/Title-With-Frames";
import BuildSection from "components/BuildSection";

const propTypes = {};

const SectionBuildGem = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="section-build">
      <TitleWithFrames label="WHAT'S THE GEM" />
      <div className="build-section-container">
        <div className="build-section-gem-left">
          <div className="build-section__item">
            <div className="build-section__item__row">
              <p>SHOP</p>
              <img src="/static/assets/img/what-gem/left_2.png" alt="" />
            </div>
            <div className="build-section__item_button">
              <img
                src="/static/assets/img/Button-frames/build-btn-arrow.png"
                alt=""
              />
            </div>
          </div>
          <div className="build-section__item">
            <div className="build-section__item__row">
              <p>CRYTIAL</p>
              <img src="/static/assets/img/what-gem/left_2.png" alt="" />
            </div>
            <div className="build-section__item_button">
              <img
                src="/static/assets/img/Button-frames/build-btn-arrow.png"
                alt=""
              />
            </div>
          </div>
          <div className="build-section__item">
            <div className="build-section__item__row">
              <p>FC TOKEN</p>
              <img src="/static/assets/img/what-gem/left_3.png" alt="" />
            </div>
            <div className="build-section__item_button">
              <img
                src="/static/assets/img/Button-frames/build-btn-arrow.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="build-section-center">
          <div className="build-section__item_center">
            <img src="/static/assets/img/what-gem/center.png" alt="" />
            <h4>GEM</h4>
          </div>
        </div>
        <div className="build-section-right">
          <div className="build-section__item">
            <div className="build-section__item_button">
              <img
                style={{ display: "none" }}
                src="/static/assets/img/Button-frames/build-btn-arrow.png"
                alt=""
              />
            </div>
            <div className="build-section__item__column">
              <img src="/static/assets/img/what-gem/right_1.png" alt="" />
              <p>UPGRADE GAME</p>
            </div>
          </div>
          <div className="build-section__item">
            <div className="build-section__item_button">
              <img
                src="/static/assets/img/Button-frames/build-btn-arrow.png"
                alt=""
              />
            </div>
            <div className="build-section__item__column">
              <img src="/static/assets/img/what-gem/right_2.png" alt="" />
              <p>UPGRADE ABILITY START</p>
            </div>
          </div>
          <div className="build-section__item">
            <div className="build-section__item_button">
              <img
                style={{ display: "none" }}
                src="/static/assets/img/Button-frames/build-btn-arrow.png"
                alt=""
              />
            </div>
            <div className="build-section__item__column">
              <img src="/static/assets/img/what-gem/right_3.png" alt="" />
              <p>UPGRADE LEVEL TC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionBuildGem.propTypes = propTypes;
export default SectionBuildGem;

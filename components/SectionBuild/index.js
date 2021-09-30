import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import TitleWithFrames from "components/Title-With-Frames";
import BuildSection from "components/BuildSection";

const propTypes = {};

const SectionBuild = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="section-build">
      <TitleWithFrames label="WHAT'S THE CRYTICAL" />
      <div className="build-section-container">
        <div className="build-section-left">
          <div className="build-section__item">
            <div className="build-section__item__free-to-earn">
              <img src="/static/assets/img/build/crytical_left.png" alt="" />
              <p>FREE TO EARN</p>
            </div>
            <div className="build-section__item__li">
              <ul>
                <li>TOURNAMENT</li>
                <li>QUEST</li>

                <li>RANKING REWARD</li>

                <li>BATTLE</li>
              </ul>
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
            <img src="/static/assets/img/build/crytical_center.png" alt="" />
            <h4>CRYTICAL</h4>
          </div>
        </div>
        <div className="build-section-right">
          <div className="build-section__item">
            <div className="build-section__item_button">
              <img
                src="/static/assets/img/Button-frames/build-btn-arrow.png"
                alt=""
              />
            </div>
            <div className="build-section__item__free-to-earn">
              <img src="/static/assets/img/build/crytical_right_1.png" alt="" />
              <p>GEM</p>
            </div>
          </div>
          <div className="build-section__item">
            <div className="build-section__item_button">
              <img
                src="/static/assets/img/Button-frames/build-btn-arrow.png"
                alt=""
              />
            </div>
            <div className="build-section__item__free-to-earn">
              <img src="/static/assets/img/build/crytical_right_2.png" alt="" />
              <p>FE COIN</p>
            </div>
          </div>
          <div className="build-section__item">
            <div className="build-section__item_button">
              <img
                src="/static/assets/img/Button-frames/build-btn-arrow.png"
                alt=""
              />
            </div>
            <div className="build-section__item__free-to-earn">
              <img src="/static/assets/img/build/crytical_right_3.png" alt="" />
              <p>TRADE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionBuild.propTypes = propTypes;
export default SectionBuild;

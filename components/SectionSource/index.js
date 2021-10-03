import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Link from "next/link";
const propTypes = {};

const SectionSource = ({
  onClickCar = () => {},
  onClickMap = () => {},
  onClickCharacter = () => {},
  onClickSpecialMode = () => {},
}) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="section-news">
      <div className="fix-rs">
        {/*  */}
        <div className="col section-left">
          <div className="section-img-video-demo">
            <video width="320" height="240" controls>
              <source src="/static/assets/video/video-demo.mp4" />
            </video>
          </div>
          <div className="row button-section-left">
            <div className="col btn-car">
              <a href="#section-car">
                <button>Xe đua</button>
              </a>
            </div>
            <div className="col btn-map">
              <a href="#section-map">
                <button>Map</button>
              </a>
            </div>
            <div className="col btn-character">
              <a href="#section-character">
                <button>Nhân vật</button>
              </a>
            </div>
          </div>
          <div className="col">
            <div className="btn-special">
              <a href="#section-special">
                <img
                  src="static/assets/img/Button-frames/btn-mod-choi-dac-biet.png"
                  alt=""
                />
                <button>Mode chơi đặc biệt</button>
              </a>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="col section-right">
          <div className="row section-title-banner">
            <div className="col banner-1">
              <img src="static/assets/img/banner-1.png" alt="" />
            </div>
            <div className="col banner-2">
              <img src="static/assets/img/banner-2.png" alt="" />
            </div>
          </div>
          <div className="section-title-button">
            <h3>Bảng thành tích</h3>
            <div className="section-title-button__frames">
              <div className="section-title-button__frames_inner">
                <div className="section-game-mode" id="nav-tab" role="tablist">
                  <a className="nav-item nav-link active">EASY</a>
                  <a className="nav-item nav-link">NORMAL</a>
                  <a className="nav-item nav-link">HARD</a>
                </div>
                <div className="section-list-source">
                  <ul className="scrollbar" id="scroll-bar-source">
                    <li className="rank_1">
                      <a>NGƯỜI CHƠI</a>
                    </li>
                    <li className="rank_2">
                      <a>NGƯỜI CHƠI 2</a>
                    </li>
                    <li className="rank_3">
                      <a>NGƯỜI CHƠI 3</a>
                    </li>
                    <li className="rank_1">
                      <a>NGƯỜI CHƠI 4</a>
                    </li>
                    <li className="rank_2">
                      <a>NGƯỜI CHƠI 5</a>
                    </li>
                    <li className="rank_3">
                      <a>NGƯỜI CHƠI 6</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionSource.propTypes = propTypes;
export default SectionSource;

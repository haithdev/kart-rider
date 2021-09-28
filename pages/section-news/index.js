import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

const propTypes = {};

const SectionNews = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="section-news">
      <div className="fix-rs">
        {/*  */}
        <div className="col section-left">
          <div className="section-img-video-demo">
            <img src="static/assets/img/video-thumbnail.png" alt="" />
          </div>
          <div className="row button-section-left">
            <div className="col btn-car">
              <button>Xe đua</button>
            </div>
            <div className="col btn-map">
              <button>Map</button>
            </div>
            <div className="col btn-character">
              <button>Nhân vật</button>
            </div>
          </div>
          <div className="col">
            <div className="btn-special">
              <img
                src="static/assets/img/Button-frames/btn-mod-choi-dac-biet.png"
                alt=""
              />
              <button>Mode chơi đặc biệt</button>
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
            <nav className="section-game-mode">
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  className="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  EASY
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  NORMAL
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  HARD
                </a>
              </div>
            </nav>
            <div
              className="tab-content section-list-source"
              id="nav-tabContent"
            >
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <ul>
                  <li>
                    <a href>NGƯỜI CHƠI</a>
                  </li>
                  <li>
                    <a href>NGƯỜI CHƠI</a>
                  </li>
                  <li>
                    <a href>NGƯỜI CHƠI</a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <ul>
                  <li>
                    <a href>NGƯỜI CHƠI Normal</a>
                  </li>
                  <li>
                    <a href>NGƯỜI CHƠI Normal</a>
                  </li>
                  <li>
                    <a href>NGƯỜI CHƠI Normal</a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <ul>
                  <li>
                    <a href>NGƯỜI CHƠI Hard</a>
                  </li>
                  <li>
                    <a href>NGƯỜI CHƠI Hard</a>
                  </li>
                  <li>
                    <a href>NGƯỜI CHƠI Hard</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionNews.propTypes = propTypes;
export default SectionNews;

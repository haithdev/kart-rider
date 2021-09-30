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
    <div className="section-new">
      <div className="hh-news">
        <div className="hh-news-banner">
          <img src="/static/assets/img/news/banner-frames.png" alt="" />
          <h3>TIN TỨC</h3>
        </div>
      </div>
      <div className="hh-new-container">
        <div className="hh-new-list">
          <div className="hh-new__item">
            <div className="hh-new__item_thumbnail">
              <img
                src="/static/assets/img/news/thumbnail.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="hh-new__item_title">
              <h4>[THÔNG BÁO]</h4>
              <p>Một thông báo gì đó</p>
            </div>
          </div>
          <div className="hh-new__item">
            <div className="hh-new__item_thumbnail">
              <img
                src="/static/assets/img/news/thumbnail.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="hh-new__item_title">
              <h4>[THÔNG BÁO]</h4>
              <p>Một thông báo gì đó</p>
            </div>
          </div>
          <div className="hh-new__item">
            <div className="hh-new__item_thumbnail">
              <img
                src="/static/assets/img/news/thumbnail.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="hh-new__item_title">
              <h4>[THÔNG BÁO]</h4>
              <p>Một thông báo gì đó</p>
            </div>
          </div>
          <div className="hh-new__item">
            <div className="hh-new__item_thumbnail">
              <img
                src="/static/assets/img/news/thumbnail.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="hh-new__item_title">
              <h4>[THÔNG BÁO]</h4>
              <p>Một thông báo gì đó</p>
            </div>
          </div>
          <div className="hh-new__item">
            <div className="hh-new__item_thumbnail">
              <img
                src="/static/assets/img/news/thumbnail.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="hh-new__item_title">
              <h4>[THÔNG BÁO]</h4>
              <p>Một thông báo gì đó</p>
            </div>
          </div>
          
          <div className="hh-new__item">
            <div className="hh-new__item_thumbnail">
              <img
                src="/static/assets/img/news/thumbnail.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="hh-new__item_title">
              <h4>[THÔNG BÁO]</h4>
              <p>Một thông báo gì đó</p>
            </div>
          </div>
          <div className="hh-new__item">
            <div className="hh-new__item_thumbnail">
              <img
                src="/static/assets/img/news/thumbnail.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="hh-new__item_title">
              <h4>[THÔNG BÁO]</h4>
              <p>Một thông báo gì đó</p>
            </div>
          </div>
        </div>
        <div className="hh-new-scroll">
          <img src="/static/assets/img/news/scroll.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

SectionNews.propTypes = propTypes;
export default SectionNews;

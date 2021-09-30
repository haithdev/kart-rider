import dynamic from "next/dynamic";
import React, { useState } from "react";
import { config } from "react-spring";
import PropTypes from "prop-types";

const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

const propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any,
      content: PropTypes.any,
    })
  ),
};

const Slider3D = ({ slidesProps = [] }) => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  });

  const onClickItem = (slide, index) => {
    setState({
      ...state,
      goToSlide: index,
    });
  };

  const onClickPrev = () => {
    setState({
      ...state,
      goToSlide: state.goToSlide - 1,
    });
  };

  const onClickNext = () => {
    setState({
      ...state,
      goToSlide: state.goToSlide + 1,
    });
  };

  const slides = slidesProps.map((slide, index) => {
    return { ...slide, onClick: () => onClickItem(slide, index) };
  });

  //! Render
  return (
    <div
      className="carousel-slide"
      style={{ width: "80%", height: "500px", margin: "0 auto" }}
    >
      <button
        type="button"
        className="btn-arrow btn-prev"
        onClick={onClickPrev}
      >
        <img src="/static/assets/img/Button-frames/btn-arrow.png" alt="" />
      </button>

      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={false}
        animationConfig={state.config}
      />

      <button
        className="btn-arrow btn-next"
        type="button"
        onClick={onClickNext}
      >
        <img src="/static/assets/img/Button-frames/btn-arrow.png" alt="" />
      </button>
    </div>
  );
};

Slider3D.propTypes = propTypes;
export default Slider3D;

import React, { useRef } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

const propTypes = {
  listImage: PropTypes.array,
  onClickItem: PropTypes.func,
};

const SliderCommon = ({ listImage = [], onClickItem = () => {} }) => {
  //! State
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    // beforeChange: function(currentSlide, nextSlide) {
    //   console.log("before change", currentSlide, nextSlide);
    // },
    // afterChange: function(currentSlide) {
    //   console.log("after change", currentSlide);
    // }
  };
  const sliderRef = useRef(null);

  //! Function
  const previous = () => {
    sliderRef && sliderRef.current && sliderRef.current.slickPrev();
  };

  const next = () => {
    sliderRef && sliderRef.current && sliderRef.current.slickNext();
  };

  //! Render
  return (
    <div className="hh-slider">
      <button
        type="button"
        className="btn-arrow btn-prev mr-3 ml-3 button"
        onClick={previous}
      >
        <img src="/static/assets/img/Button-frames/btn-arrow.png" alt="" />
      </button>

      <Slider ref={sliderRef} {...settings}>
        {listImage.map((item) => (
          <div
            key={item.id}
            className="item-slider"
            onClick={() => onClickItem(item)}
          >
            <img src={item.src} alt="each-char" />
          </div>
        ))}
      </Slider>

      <button
        type="button"
        className="btn-arrow ml-3 mr-3 button"
        onClick={next}
      >
        <img src="/static/assets/img/Button-frames/btn-arrow.png" alt="" />
      </button>
    </div>
  );
};

SliderCommon.propTypes = propTypes;
export default SliderCommon;

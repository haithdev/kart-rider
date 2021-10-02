import React from "react";
import PropTypes from "prop-types";
import CharacterWithSlider from "components/CharacterWithSlider";

const propTypes = {};

const SectionCar = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <CharacterWithSlider
      isFullImage={true}
      label="XE ĐUA"
      listImage={[
        {
          id: 1,
          src: "/static/assets/img/cars/car_1.png",
        },
        {
          id: 2,
          src: "/static/assets/img/cars/car_2.png",
        },
        {
          id: 3,
          src: "/static/assets/img/cars/car_3.png",
        },
        {
          id: 4,
          src: "/static/assets/img/cars/car_4.png",
        },
      ]}
    />
  );
};

SectionCar.propTypes = propTypes;
export default SectionCar;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import CharacterWithSlider from "components/CharacterWithSlider";

const propTypes = {};

const SectionMap = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <CharacterWithSlider
      isFullImage={true}
      label="Map"
      listImage={[
        {
          id: 1,
          src: "/static/assets/img/maps/map_1.jpg",
        },
        {
          id: 2,
          src: "/static/assets/img/maps/map_2.jpg",
        },
        {
          id: 3,
          src: "/static/assets/img/maps/map_3.jpg",
        },
        {
          id: 4,
          src: "/static/assets/img/maps/map_2.png",
        },
      ]}
    />
  );
};

SectionMap.propTypes = propTypes;
export default SectionMap;

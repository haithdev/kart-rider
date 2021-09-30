import React, { useState } from "react";
import PropTypes from "prop-types";
import Title from "components/Title";
import VerticalSwipeToSlide from "components/VerticalSwipeToSlide";

const propTypes = {
  label: PropTypes.string.isRequired,
  listImage: PropTypes.array,
};

const CharacterWithSlider = ({ label = "", listImage = [] }) => {
  //! State
  const [objClicked, setObjClicked] = useState(listImage[0]);

  //! Function
  //* TODO: Logic click item
  const onClickItemSlider = (item) => {
    setObjClicked(item);
  };

  //! Render
  return (
    <div className="character-section">
      <Title label={label} />
      <div className="character-section__container">
        <div className="character-section__content">
          <VerticalSwipeToSlide
            listImage={listImage}
            onClickItem={onClickItemSlider}
          />

          <div className="character-section__preview">
            <img src={objClicked?.src} alt="preview-char" />
          </div>
        </div>
      </div>
    </div>
  );
};

CharacterWithSlider.propTypes = propTypes;
export default CharacterWithSlider;

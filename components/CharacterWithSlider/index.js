import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Title from "components/Title";
import VerticalSwipeToSlide from "components/VerticalSwipeToSlide";

const propTypes = {
  label: PropTypes.string.isRequired,
  listImage: PropTypes.array,
};

const CharacterWithSlider = ({
  label = "",
  listImage = [],
  isFullImage = false,
}) => {
  //! State
  const timer = useRef(null);
  const refPreview = useRef(null);
  const [show, setShow] = useState(true);
  const [objClicked, setObjClicked] = useState(listImage[0]);

  //! Function
  //* TODO: Logic click item
  const onClickItemSlider = (item) => {
    setShow(false);
    setObjClicked(item);

    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setShow(true);
    }, 100);
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

          <div
            className={
              isFullImage
                ? "character-section__preview fullImage"
                : "character-section__preview"
            }
          >
            {show && (
              <img
                ref={refPreview}
                src={objClicked?.src}
                alt="preview-char"
                className="faded_preview"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

CharacterWithSlider.propTypes = propTypes;
export default CharacterWithSlider;

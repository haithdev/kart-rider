import React from "react";
import CharacterWithSlider from "components/CharacterWithSlider";

const propTypes = {};

const SectionCharacter = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <CharacterWithSlider
      label="NHÂN VẬT"
      listImage={[
        {
          id: 1,
          src: "/static/assets/img/characters/char_1.png",
        },
        {
          id: 2,
          src: "/static/assets/img/characters/char_2.png",
        },
        {
          id: 3,
          src: "/static/assets/img/characters/char_3.png",
        },
        {
          id: 4,
          src: "/static/assets/img/characters/char_4.png",
        },
        {
          id: 5,
          src: "/static/assets/img/characters/char_5.png",
        },
      ]}
    />
  );
};

SectionCharacter.propTypes = propTypes;
export default SectionCharacter;

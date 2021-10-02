import React from "react";
import PropTypes from "prop-types";
import Slider3D from "components/Slider3D";
import Title from "../Title";
const propTypes = {};

const SectionSpecialMod = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <>
      <Title label="MODE CHƠI ĐẶC BIỆT" />
      <div className="section-special-mod">
        <Slider3D
          slidesProps={[
            {
              key: 1,
              content: (
                <img src="/static/assets/img/special-mode/spm_1.png" alt="1" />
              ),
            },
            {
              key: 2,
              content: (
                <img src="/static/assets/img/special-mode/spm_2.png" alt="2" />
              ),
            },
            {
              key: 3,
              content: (
                <img src="/static/assets/img/special-mode/spm_1.png" alt="3" />
              ),
            },
            {
              key: 4,
              content: (
                <img src="/static/assets/img/special-mode/spm_2.png" alt="4" />
              ),
            },
            {
              key: 5,
              content: (
                <img src="/static/assets/img/special-mode/spm_1.png" alt="5" />
              ),
            },
          ]}
        />
      </div>
    </>
  );
};

SectionSpecialMod.propTypes = propTypes;
export default SectionSpecialMod;

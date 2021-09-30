import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

const propTypes = {};

const SectionAboutUs = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="section-about-container">
      <div className="section-about-introduction">
        <h3>INTRODUCTION</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="section-about-mission">
          <div className="section-about-misstion__image"></div>
        <div className="section-about-misstion__title">
          <h3>VISION & MISSION</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>
      <div className="section-about-aboutus">
        <div className="section-about-misstion__title">
          <h3>ABOUT US</h3>
          <h4>DINH PHUONG - CEO</h4>
          <ul>
            <li>Former CEO/Founder of DOBE Vietnam</li>
            <li>
              - Goole recognines: The breakthrough innovator of the year 2019
            </li>
            <li>
              - Goole recognines: The breakthrough innovator of the year 2019
            </li>
            <li>
              - Goole recognines: The breakthrough innovator of the year 2019
            </li>
          </ul>
          <h4>DOAN TUAN MANH - CTO</h4>
          <ul>
            <li>Former CEO/Founder of DOBE Vietnam</li>
            <li>
              - Goole recognines: The breakthrough innovator of the year 2019
            </li>
            <li>
              - Goole recognines: The breakthrough innovator of the year 2019
            </li>
            <li>
              - Goole recognines: The breakthrough innovator of the year 2019
            </li>
          </ul>
          <h4>NGUYEN THANH CHUNG - CDD</h4>
          <ul>
            <li>Former CEO/Founder of DOBE Vietnam</li>
            <li>
              - Goole recognines: The breakthrough innovator of the year 2019
            </li>
            <li>
              - Goole recognines: The breakthrough innovator of the year 2019
            </li>
            <li>
              - Goole recognines: The breakthrough innovator of the year 2019
            </li>
          </ul>
        </div>
        <div className="section-about-misstion__image"></div>
      </div>
    </div>
  );
};

SectionAboutUs.propTypes = propTypes;
export default SectionAboutUs;

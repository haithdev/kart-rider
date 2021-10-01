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
          An E-sport game inspired by the famous Chocobo Racing. Here anyone can
          make money from individual skills and tactical thinking. The player
          can take part in many different actions: Register races, become an
          audience, perdict the competition result, collect materials to build a
          car, open a garage or even a factory to manufacture powerful turning
          cars, build trading platforms, trasnfer related items, host a racing
          contest. The most astounding thing is to regenerate your own racing
          faerie in FE Racing and even reap huge profits from that.
        </p>
      </div>
      <div className="section-about-mission">
        <div className="section-about-misstion__image"></div>
        <div className="section-about-misstion__title">
          <h3>VISION & MISSION</h3>
          <p>
            With outstanding featues such as decentralization, security,
            transparency, and freedom, blockchain technology offers the
            opportunity to build an advenced socienty for the Game industry.
            Players can slosey connect with the world in the game, not just one
            but a game series, with a consistent, persistent user database. It's
            like an OASIS* of the real world.
          </p>
          <p>We kicked off the project with for main goals</p>
          <p>
            1. Create an engaging Esport Game that everyone wants to play, based
            on the Blickchain technology platform. Game play must be incredibly
            jouful and entertaning to keep players interested in participating
            in the game every day for many years. The game have helpful features
            that link players together and interract like a miniature society.
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
              - Owns a Youtube Diamon Button with more than 10.000.000
              subscribers
            </li>
            <li>
              - Experience in implementing an Online communication system with
              nearly 5 bilion times serve
            </li>
          </ul>
          <h4>DOAN TUAN MANH - CTO</h4>
          <ul>
            <li>
              Former Vice Persident of Technology at Vietnam Television Station
            </li>
            <li>
              - Expert in implementing Bigdata systems, data analytics, and
              machine learning
            </li>
            <li>
              - Experience in deleloping large systems for multinational
              corporations in the world
            </li>
            <li>
              - Once in charge of developing data processing analysis systems in
              logistics for the Korean army
            </li>
          </ul>
          <h4>NGUYEN THANH CHUNG - PDD</h4>
          <ul>
            <li>Former project development director of BSC Securities exchange - BIDC Security Co</li>
            <li>
              - Experience as Director of high-tech product development at customs, electronic tariffs, electionic invoice in FDI enterprises.
            </li>
            <li>
              - The key member in the development of trading and financial systems in FCracing / OWL World
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

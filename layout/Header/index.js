import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/actions";
import { useRouter } from "next/router";

const Header = (props) => {
  const distpatch = useDispatch();
  const router = useRouter();
  const authReducer = useSelector((state) => state.authReducer);

  const isLogin = authReducer?.auth?.isLogin;

  return (
    <div className="header">
      <div className="fix-size">
        <div className="logo">
          <img src="/static/assets/img/logo.png" alt="" />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link home-title" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link whitepaper-title" href="#">
                  White Paper
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link news-title" href="#">
                  Tin Tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link contact-title" href="#">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="btn-play">
          <img src="/static/assets/img/Button-frames/btn-play.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

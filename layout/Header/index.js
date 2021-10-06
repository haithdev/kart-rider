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
        <div className="nav-mobile">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div>
              <ul>
                <li className="nav-item active">
                  <Link href="/">
                    <a className="nav-link home-title" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/whitepaper">
                    <a className="nav-link whitepaper-title" href="#">
                      White Paper
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/news">
                    <a className="nav-link news-title" href="#">
                      Tin Tức
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link contact-title" href="#">
                    Liên Hệ
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="btn-play">
          <img src="/static/assets/img/banner-header.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

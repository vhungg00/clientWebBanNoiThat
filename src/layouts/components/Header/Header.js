import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import CartButton from "../../../components/CartButton";
import SideBar from "../../../components/SideBar";
import { openSideBar } from "../../../redux/actions/ProductActions";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  const dispatch = useDispatch();

  return (
    <header className={cx("header")}>
      <div className="grid wide">
        <div className={cx("toolbar")}>
          <div className={cx("header-logo")}>
            <a href="#" className={cx("header-logo-link")}>
              <img src="./assets/images/logo.656e1d77.svg" alt="" />
            </a>
          </div>

          <div className={cx("header-nav")}>
            <ul className={cx("header-nav-list")}>
              <li className={cx("header-nav-list__item")}>
                <NavLink
                  to="/"
                  className={(nav) =>
                    cx("header-nav-list__item-link", { active: nav.isActive })
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className={cx("header-nav-list__item")}>
                <NavLink
                  to="/about"
                  className={(nav) =>
                    cx("header-nav-list__item-link", { active: nav.isActive })
                  }
                >
                  About
                </NavLink>
              </li>
              <li className={cx("header-nav-list__item")}>
                <NavLink
                  to="/product"
                  className={(nav) =>
                    cx("header-nav-list__item-link", { active: nav.isActive })
                  }
                >
                  Product
                </NavLink>{" "}
              </li>
            </ul>
          </div>
          <div className={cx("header-links")}>
            <CartButton />
          </div>
          <button
            onClick={() => dispatch(openSideBar())}
            className={cx("nav-toggle")}
          >
            <FaBars />
          </button>
        </div>
      </div>
      <SideBar />
    </header>
  );
}

export default Header;

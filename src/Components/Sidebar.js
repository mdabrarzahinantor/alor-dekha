import React from "react";
import "./Sidebar.css";
import Logo from "../Assets/Images/LOGO.svg";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img alt="Logo" src={Logo} />
      </div>
      {/*  */}
      <div className="sidebar-links">
        <NavLink
          activeClassName="active-link"
          exact
          to="/"
          className={` sidebar-link`}
        >
          <div>
            <i className="fas fa-home    "></i>
          </div>
          <div>মূলপাতা</div>
        </NavLink>
        <NavLink
          activeClassName="active-link"
          to="/category/islam"
          className={` sidebar-link`}
        >
          <div>
            <i className="fas fa-mosque    "></i>
          </div>
          <div>ইসলাম</div>
        </NavLink>
        <NavLink
          activeClassName="active-link"
          to="/category/ummah"
          className={` sidebar-link`}
        >
          <div>
            <i className="fas fa-users    "></i>
          </div>
          <div>উম্মাহ</div>
        </NavLink>
        <NavLink
          activeClassName="active-link"
          to="/category/bad_motobad"
          className={`  sidebar-link`}
        >
          <div>
            <i className="fas fa-lightbulb    "></i>
          </div>
          <div>বাদ-মতবাদ</div>
        </NavLink>
        <NavLink
          activeClassName="active-link"
          to="/category/shobbhotar_dondho"
          className={` sidebar-link`}
        >
          <div>
            <i className="fas fa-sort-amount-up    "></i>
          </div>
          <div>সভ্যতার দ্বন্ধ</div>
        </NavLink>
        <NavLink
          activeClassName="active-link"
          to="/category/shomoshamoik"
          className={` sidebar-link`}
        >
          <div>
            <i className="fas fa-history    "></i>
          </div>
          <div>সমসাময়িক</div>
        </NavLink>
        <NavLink
          activeClassName="active-link"
          to="/lists"
          className={` sidebar-link`}
        >
          <div>
            <i className="fas fa-list-ul    "></i>
          </div>
          <div>তালিকাসমূহ</div>
        </NavLink>
        <NavLink
          activeClassName="active-link"
          to="/posters"
          className={` sidebar-link`}
        >
          <div>
            <i className="fas fa-paint-brush    "></i>
          </div>
          <div>পোস্টার</div>
        </NavLink>
      </div>
      {/*  */}
      <div className="sidebar-links-footer">
        <NavLink
          activeClassName="active-link"
          to="/authors"
          className={`  sidebar-link`}
        >
          <div>
            <i className="fas fa-pen    "></i>
          </div>
          <div>লেখকগণ</div>
        </NavLink>
        <NavLink
          activeClassName="active-link"
          to="/contact"
          className={` sidebar-link`}
        >
          <div>
            <i className="fas fa-wifi    "></i>
          </div>
          <div>যোগাযোগ</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;

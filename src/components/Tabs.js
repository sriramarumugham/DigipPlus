import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Tabs.css";


// this componets connects witht the navLink from react router dom 
function Tabs({ path, data }) {
  return (
    <div className="tabWrapper">
      <NavLink
        className={({ isActive }) => (isActive ? "activeTab" : null)}
        to={path}
      >
        {data}
      </NavLink>
    </div>
  );
}

export default Tabs;

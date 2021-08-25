import React, { FC } from "react";

import { NavLink } from "react-router-dom";

export const Navbar: FC = () => (
    <nav>
      <div className="nav-wrapper px1">
        <a href="/" className="brand-logo">React + TS</a>
        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/">To Do</NavLink></li>
          <li><NavLink to="/about">Information</NavLink></li>
          <li><NavLink to="/test">Test</NavLink></li>
        </ul>
      </div>
    </nav>
);
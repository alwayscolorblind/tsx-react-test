import React from 'react';

import { NavLink } from "react-router-dom";

export const AboutPage: React.FC = () => {
  return (
      <>
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid aspernatur eaque magni
          maxime minima odio officia reiciendis similique?
        </p>
        <NavLink to={"/"}>
          <button className="btn">Go back!</button>
        </NavLink>
      </>
  );
};
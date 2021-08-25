import React from 'react';

import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  }

  return (
      <>
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid aspernatur eaque magni
          maxime minima odio officia reiciendis similique?
        </p>
        <button className="btn" onClick={handleClick}>Go back!</button>
      </>
  );
};
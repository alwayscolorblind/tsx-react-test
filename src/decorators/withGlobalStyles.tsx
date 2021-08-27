import React from "react";

import "../App.css";

import { DecoratorFn } from "@storybook/react";

export const withGlobalStyles: DecoratorFn = (storyFn) => {
  return (
      <>
        {storyFn()}
      </>
  )
}
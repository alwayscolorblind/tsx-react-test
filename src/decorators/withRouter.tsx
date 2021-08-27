import React from "react";

import { BrowserRouter } from "react-router-dom";

import { DecoratorFn } from "@storybook/react";

const withRouter: DecoratorFn = (storyFn) => {
    return (
        <BrowserRouter>
          {storyFn()}
        </BrowserRouter>
    )
}

export default withRouter;
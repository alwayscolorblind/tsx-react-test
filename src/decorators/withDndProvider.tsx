import React from "react";

import { DndProvider } from "react-dnd";

import { HTML5Backend } from "react-dnd-html5-backend";
import {DecoratorFn} from "@storybook/react";

export const withDndProvider: DecoratorFn = (storyFn) => {
  return (
      <DndProvider backend={HTML5Backend}>
        {storyFn()}
      </DndProvider>
  );
} ;
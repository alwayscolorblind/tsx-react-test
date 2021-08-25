import React, { useState } from "react";

export const useInput = (handleAdd: Function, initial: string = "") => {
  const [value, setValue] = useState(initial);

  const onKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAdd(value);
      setValue(() => "");
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    setValue(() => event.target.value);
  }

  return {
    value,
    onKeyPress,
    onChange
  }
}
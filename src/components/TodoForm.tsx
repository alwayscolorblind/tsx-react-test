import React, { FC, useState, useContext } from 'react';

import { StoreContext } from "../App";

const TodoForm: FC = () => {
    const [title, setTitle] = useState<string>("");

    const { handleAdd } = useContext(StoreContext);

    const keyPressedHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleAdd(title);
            setTitle(() => "");
        }
    };

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement> ) => {
      setTitle(() => event.target.value);
    }

    return (
        <div className="input-field mt5">
            <input
                type="text"
                id="title"
                placeholder="Title"
                onKeyPress={keyPressedHandler}
                onChange={changeHandler}
                value={title}
            />
            <label htmlFor="title" className="active">Enter title</label>
        </div>
    );
};

export default TodoForm;

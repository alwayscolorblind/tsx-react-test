import React, { FC, useContext } from 'react';

import { StoreContext } from "../App";

import { useInput } from "../hooks/useInput";

const TodoForm: FC = () => {
    const { handleAdd } = useContext(StoreContext);

    const inp = useInput(handleAdd);

    return (
        <div className="input-field mt5">
            <input
                type="text"
                id="title"
                placeholder="Title"
                {...inp}
            />
            <label htmlFor="title" className="active">Enter title</label>
        </div>
    );
};

export default TodoForm;

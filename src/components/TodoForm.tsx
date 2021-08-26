import React, { FC } from 'react';

import { useInput } from "hooks/useInput";

import { useStore } from "hooks/useStore";

const TodoForm: FC = () => {
    const { handleAdd } = useStore();

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

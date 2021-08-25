import React, {useRef} from 'react';

interface TodoFormProps{
    addTodo(title: string) : void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null);

    const keyPressedHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.addTodo(ref.current!.value);
            ref.current!.value = '';
        }
    };

    return (
        <div className="input-field mt5">
            <input
                ref={ref}
                type="text"
                id="title"
                placeholder="Title"
                onKeyPress={keyPressedHandler}
            />
            <label htmlFor="title" className="active">Enter title</label>
        </div>
    );
};

export default TodoForm;

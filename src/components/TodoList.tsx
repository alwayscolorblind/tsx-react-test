import React, { FC } from "react";

import { useStore } from "hooks/useStore";

const TodoList: FC = () => {
  const {
    todos,
    onToggle,
    onRemove
  } = useStore();

  if (!todos.length) {
    return <p className="center">There is empty!</p>
  }

  return (
      <ul>
        {todos.map(todo => {
          const className = ['todo'];

          if (todo.completed) {
            className.push('completed')
          }

          return (
              <li className={className.join(' ')} key={todo.id}>
                <label>
                  <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => onToggle(todo.id)}
                  />
                  <span>{todo.title}</span>
                  <i
                      className="material-icons red-text"
                      onClick={() => onRemove(todo.id)}
                  >
                    delete
                  </i>
                </label>
              </li>
          );
        })}
      </ul>
  );
};

export default TodoList;
import React, { FC, useCallback } from "react";

import { useStore } from "hooks/useStore";
import Card from "components/Card";

const TodoList: FC = () => {
  const {
    todos,
    setTodos
  } = useStore();

  const moveCard = useCallback(
      (dragIndex: number, hoverIndex: number) => {
        const dragCard = todos[dragIndex];

        const newTodos = [
            ...todos
        ];

        newTodos.splice(dragIndex, 1);
        newTodos.splice(hoverIndex, 0, dragCard);

        setTodos(newTodos)
      },
      [todos, setTodos],
  );


  if (!todos.length) {
    return <p className="center">There is empty!</p>
  }

  return (
      <ul>
        {todos.map((todo, index) => {
          return (
              <Card
                  key={todo.id}
                  todo={todo}
                  moveCard={moveCard}
                  index={index}
              />
          );
        })}
      </ul>
  );
};

export default TodoList;
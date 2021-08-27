import React, { FC } from "react";

import { useStore } from "@hooks/useStore";
import Card from "@components/Card";

const TodoList: FC = () => {
  const {
    todos
  } = useStore();

  if (!todos.length) {
    return <p className="center">There is empty!</p>
  }

  return (
      <ul>
        {todos.map((todo, index) => {
          return (
              <Card
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                  index={index}
              />
          );
        })}
      </ul>
  );
};

export default TodoList;
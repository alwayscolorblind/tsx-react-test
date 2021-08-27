import { useCallback } from "react";
import { useStore } from "@hooks/useStore";

export const useCardMoving = () => {
  const {
    todos,
    setTodos
  } = useStore()

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

  return moveCard;
}
import { useEffect } from "react";

import Store from "@stores/store";
import { ITodo } from "@interfaces/interfaces";

export const useTodosPreserve = (store: Store) => {
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || '[]') as ITodo[];

    store.setTodos(saved);
  }, [store]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(store.todos));
  }, [store.todos]);
}
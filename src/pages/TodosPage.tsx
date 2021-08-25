import React, {FC, useEffect, useContext} from 'react';

import TodoForm from "../components/TodoForm";

import TodoList from "../components/TodoList";

import {ITodo} from "../interfaces/interfaces";

import {observer} from "mobx-react";

import {StoreContext} from "../App";

const TodosPage: FC = observer(() => {
      const store = useContext(StoreContext)

      useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("todos") || '[]') as ITodo[];

        store.setTodos(saved);
      });

      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(store.todos));
      }, [store.todos]);

      return (
          <>
            <TodoForm/>
            <TodoList/>
          </>
      );
    }
)

export default TodosPage;
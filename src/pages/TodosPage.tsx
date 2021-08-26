import React, { FC } from 'react';

import TodoForm from "../components/TodoForm";

import TodoList from "../components/TodoList";

import { observer } from "mobx-react";

import { useLocalStorage } from "../hooks/useLocalStorage";

import { useStore } from "../hooks/useStore";

const TodosPage: FC = observer(() => {
      const store = useStore();

      useLocalStorage(store);

      return (
          <>
            <TodoForm/>
            <TodoList/>
          </>
      );
    }
)

export default TodosPage;
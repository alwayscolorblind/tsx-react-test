import React, { FC, useContext } from 'react';

import TodoForm from "../components/TodoForm";

import TodoList from "../components/TodoList";

import { observer } from "mobx-react";

import { StoreContext } from "../App";

import { useUpdateLocalStorage } from "../hooks/useUpdateLocalStorage";

const TodosPage: FC = observer(() => {
      const store = useContext(StoreContext);

      useUpdateLocalStorage(store);

      return (
          <>
            <TodoForm/>
            <TodoList/>
          </>
      );
    }
)

export default TodosPage;
import React, { FC } from 'react';

import TodoForm from "@components/TodoForm";

import TodoList from "@components/TodoList";

import { observer } from "mobx-react";

import { useTodosPreserve } from "@hooks/useTodosPreserve";

import { useStore } from "@hooks/useStore";

const TodosPage: FC = observer(() => {
      const store = useStore();

      useTodosPreserve(store);

      return (
          <>
            <TodoForm/>
            <TodoList/>
          </>
      );
    }
)

export default TodosPage;
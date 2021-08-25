import React, {Component, useEffect, useState} from 'react';

import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

import {ITodo} from "../interfaces/interfaces";

import Store from "../stores/store";

import {observer} from "mobx-react";

const store = new Store();

@observer
class TodosPage extends Component<{}, {}> {
    componentDidMount = () => {
        const saved = JSON.parse(localStorage.getItem("todos") || '[]') as ITodo[];

        store.setTodos(saved);
    };

    componentDidUpdate = () => {
        localStorage.setItem("todos", JSON.stringify(store.todos));
    };

    render() {
        return (
            <>
                <TodoForm addTodo={store.handleAdd}/>
                <TodoList todos={store.todos} onRemove={store.onRemove} onToggle={store.onToggle} />
            </>
        );
    }
}

export default TodosPage;
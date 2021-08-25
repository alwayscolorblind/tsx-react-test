import {makeAutoObservable} from "mobx";

import {ITodo} from "../interfaces/interfaces";

class Store {
  todos: ITodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setTodos = (todos: ITodo[]) => {
    this.todos = todos
  };

  handleAdd = (title: string) => {
    const todo: ITodo = {
      id: Date.now(),
      title,
      completed: false
    };

    this.todos = [
      todo,
      ...this.todos
    ];
  };

  onRemove = (id: number) => {
    this.todos = this.todos.filter(todo => {
      return todo.id !== id;
    });
  };

  onToggle = (id: number) => {
    this.todos = this.todos.map(todo => {
      return todo.id !== id ? todo :
          {
            ...todo,
            completed: !todo.completed
          };
    });
  };
}

export default Store;
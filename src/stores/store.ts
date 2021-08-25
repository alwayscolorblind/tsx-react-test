import {action, makeObservable, observable} from "mobx";
import {ITodo} from "../interfaces/interfaces";

class Store {
    @observable
    todos: ITodo[] = [];

    constructor() {
        makeObservable(this);
    }

    @action
    setTodos = (todos: ITodo[]) => {
        this.todos = todos
    };

    @action
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

    @action
    onRemove = (id: number) => {
        this.todos = this.todos.filter(todo => {
            return todo.id !== id;
        });
    };

    @action
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
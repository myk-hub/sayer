import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  private todos: Todo[];
  private nextId: number;
  // private nextText: string;

  constructor() {
    this.todos = [
      new Todo(0, "Write code today!"),
      new Todo(1, "Write some more code tomorrow"),
      new Todo(2, "Optimize code tomorrow evening")
    ];

    this.nextId = 3;
  }

  public addTodo(text: string): void {
    // console.log(this.todos);
    let todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.nextId++;
  }

  public getTodos(): Todo[] {
    return this.todos;
  }

  public removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

}

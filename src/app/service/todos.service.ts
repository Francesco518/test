import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todos: string[] = [];
  private completedTodos: string[] = [];

  getTodos(): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.todos);
      }, 2000);
    });
  }

  getCompletedTodos(): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.completedTodos);
      }, 2000);
    });
  }

  addTodo(todo: string): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.todos.push(todo);
        resolve();
      }, 2000);
    });
  }

  markCompleted(todo: string): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.todos.indexOf(todo);
        if (index !== -1) {
          this.todos.splice(index, 1);
          this.completedTodos.push(todo);
        }
        resolve();
      }, 2000);
    });
  }
}
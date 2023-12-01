import { Component, OnInit } from '@angular/core';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: string[] = [];
  completedTodos: string[] = [];
  todo: string = '';
  loading: boolean = true

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todosService.getTodos().then((todos) => {
      this.todos = todos;
      this.loading = false
    });

    this.todosService.getCompletedTodos().then((completedTodos) => {
      this.completedTodos = completedTodos;
    });
  }

  addTodo(): void {
    if (this.todo.trim()) {
      this.todosService.addTodo(this.todo.trim()).then(() => {
        this.loadTodos();
        this.todo = '';
      });
    }
  }

  markCompleted(todo: string): void {
    this.todosService.markCompleted(todo).then(() => {
      this.loadTodos();
    });
  }
}
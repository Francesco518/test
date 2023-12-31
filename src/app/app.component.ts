import { Component, OnInit } from '@angular/core';
import { TodosService } from './service/todos.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: string[] = [];
  completedTodos: string[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getTodos().then((todos) => {
      this.todos = todos;
    });

    this.todosService.getCompletedTodos().then((completedTodos) => {
      this.completedTodos = completedTodos;
    });
  }

  markCompleted(todo: string): void {
    this.todosService.markCompleted(todo).then(() => {
      this.ngOnInit();
    });
  }
}
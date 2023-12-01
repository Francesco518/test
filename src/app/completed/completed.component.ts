import { Component, OnInit } from '@angular/core';
import { TodosService } from '../service/todos.service';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  completedTodos: string [] = [];
  loading: boolean = true

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.loadCompletedTodos()
  }
  loadCompletedTodos(): void {
    this.todosService.getCompletedTodos().then((completedTodos) => {
      this.completedTodos = completedTodos;
      this.loading = false
    })
  }

}

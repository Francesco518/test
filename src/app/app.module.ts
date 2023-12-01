import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';

import { TodosService } from './service/todos.service';
import { CompletedComponent } from './completed/completed.component';
import { NavbarComponent } from './navbar/navbar.component'; 
const routes: Routes = [
  { path: '', component: TodosComponent },
  {path: 'completed', component: CompletedComponent }
 
];

@NgModule({
  declarations: [AppComponent, TodosComponent, CompletedComponent, NavbarComponent, ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
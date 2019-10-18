import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListFormComponent } from './todo-list-form/todo-list-form.component';
import { TodoListTableComponent } from './todo-list-table/todo-list-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListFormComponent,
    TodoListTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

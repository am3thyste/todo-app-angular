import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

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
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

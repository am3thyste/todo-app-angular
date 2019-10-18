import { Component, OnInit } from '@angular/core';
import { TodoTable } from './todoTable';

@Component({
  selector: 'app-todo-list-table',
  templateUrl: './todo-list-table.component.html',
  styleUrls: ['./todo-list-table.component.css']
})
export class TodoListTableComponent implements OnInit {

  modelTable = new TodoTable("Todo 1", "20/10/2019", "oui", "delete/update");
  constructor() { }

  ngOnInit() {
  }

}

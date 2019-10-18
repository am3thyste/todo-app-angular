import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-todo-list-table',
  templateUrl: './todo-list-table.component.html',
  styleUrls: ['./todo-list-table.component.css']
})
export class TodoListTableComponent implements OnInit {
  private url = "http://localhost:2403/todos";
  todos = [];
  constructor(private http: Http) { }


  ngOnInit() {
    this.http.get(this.url).subscribe(response => this.todos = response.json);
  }

}

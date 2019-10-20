import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-todo-list-table',
  templateUrl: './todo-list-table.component.html',
  styleUrls: ['./todo-list-table.component.css']
})
export class TodoListTableComponent implements OnInit {
  private url = "http://localhost:2403/todos";
  todos = [];
  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get(this.url).subscribe(response => response.valueOf);
  }

}

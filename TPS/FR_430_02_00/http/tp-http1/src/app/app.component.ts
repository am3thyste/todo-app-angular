import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todos';
  todos = [];
  private todosUrl = 'api/todos';

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.loadData();

  }

  loadData() {
    this.http.get('api/todos').toPromise().then(response => {
      this.todos = response.json().data
    });
  }

  createTodo(todo) {
    this.http.post(this.todosUrl, todo).toPromise().then(response => {
      this.loadData;
    })
  }
}

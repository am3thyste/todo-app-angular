import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  model = new Todo(12, "je travaille", "chez Acensi");
  places = ['travail', 'work'];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
  }

}

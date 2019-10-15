import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  model = new Todo(12, "une chose à faire", "work");
  places = ['home', 'work'];

  constructor() { }

  ngOnInit() {
  }

}

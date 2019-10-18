import { Component, OnInit } from '@angular/core';
import { todoForm } from './todoForm';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.css']
})
export class TodoListFormComponent implements OnInit {

  model = new todoForm("Todo 1", "20/10/2019");

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-app';
  values = ['value1', 'value2', 'value3', 'value4'];
  show = true;

  doClick() {
    this.title = 'click sur button';
  }


  toggle() {
    this.show = !this.show;
  }

  log(value) {
    console.log(value);
  }
}

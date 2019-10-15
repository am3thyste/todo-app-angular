import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interpolation';
  firstname = 'Ludmila';
  name = 'Ursu';

  myFunction() {
    var x = document.getElementById("btn").innerText;
    document.getElementById("demo").innerText = x;
  }
}

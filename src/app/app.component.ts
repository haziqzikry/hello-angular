import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My First Angular App';
  counter: number = 0;
  nameList = ['John', 'Mary', 'Joe', 'Nancy'];
  name: string = '';

  add() {
    this.counter++;
  }

  substract() {
    this.counter--;
  }

  addUser() {
    this.nameList.push(this.name);
    this.name = '';
  }
}

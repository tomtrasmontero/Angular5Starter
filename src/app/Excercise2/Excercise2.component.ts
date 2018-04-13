import { Component } from '@angular/core';

@Component({
  selector: 'app-excercise2',
  templateUrl: './Excercise2.component.html'
})

export class Excercise2 {
  username = '';

  constructor() {

  }

  updateUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  resetInput() {
    this.username = '';
  }
}

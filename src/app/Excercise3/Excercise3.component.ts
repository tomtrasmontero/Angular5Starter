import { Component } from "@angular/core";

@Component({
  selector: "app-excercise3",
  templateUrl: "./Excercise3.component.html",
  styleUrls: ['./Excercise3.component.css']
})

export class Excercise3 {
  showParagraph: boolean = false;
  buttonCount: number[] = [];
  counter = 0;

  toggleParagraph() {
    this.counter += 1;
    this.buttonCount.push(this.counter);
    this.showParagraph = !this.showParagraph;
  }
}

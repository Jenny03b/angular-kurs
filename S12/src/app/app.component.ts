import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  textField!: string;
  startTyping!: string;
  direction!: string;

  done() {
    console.log('Zrobione!');
  }

  wheelDirection(deltaY: number) {
    if (deltaY > 0) {
      this.direction = 'Kręcisz się w dół';
    } else if (deltaY < 0) {
      this.direction = 'Kręcisz się w górę';
    }
  }

}


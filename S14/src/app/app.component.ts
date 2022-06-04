import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  blackDiv = 'black';
  yellowDiv = 'yellow';
  colorSwitch = 'green';
  text = 'Wpisz coś';
  htmlText =
    '<h2>Anglar jest fajny</h2><blockquote>Ale trzeba się dużo uczyć</blockquote>';
  isDisabled = true;
}

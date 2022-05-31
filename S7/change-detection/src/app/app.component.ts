import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Change Detecion';
  counter=0;

  construction() {
    setInterval(() => {}, 1000);
  }

  getInfo(){
    console.log("Metoda `getInfo()` została wywołana");
    return "Tekst wyświetlony z metdy";
  }

  count() {
    this.counter++;
  }

  notBinded() {
    console.log("Ta metoda nie jest bindowana");
  }
}

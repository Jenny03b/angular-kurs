import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  someObject?: Foo;

  constructor() {
    setTimeout(() => {
      this.someObject = { text: 'Inicjalizacja z opóźnieniem' };
    }, 3000);

    setTimeout(() => {
      const data = { info: 'To działa!' };
      this.someObject = { ...this.someObject, data };
    }, 5000);
  }
}

interface Foo {
  text?: string;
  data?: MetaData;
}

interface MetaData {
  info: string;
}

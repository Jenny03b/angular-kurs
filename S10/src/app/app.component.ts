import { Component } from '@angular/core';
import { personData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  persons = personData;
  frameworks = [
    'Angular',
    'React',
    'Vue',
    'Ember',
    'Backbone',
    'Express',
    'Django',
    'Rails',
    'Laravel',
    'Spring',
  ];

  cars = [
    {
      mark: 'Opel',
      model: 'Corsa',
    },
    {
      mark: 'Nissan',
      model: 'Juke',
    },
    {
      mark: 'Fiat',
      model: 'Tipo',
    },
    {
      mark: 'Skoda',
      model: 'Oktavia',
    },
  ];

  carsObj = {
    Opel: 'Corsa',
    Nissan: 'Juke',
    Fiat: 'Tipo',
    Skoda: 'Oktavia',
  };

}


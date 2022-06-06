import { Component } from '@angular/core';
import { SelectedDog } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onStringEvent($event: string) {
    console.log('string', $event);
  }

  onBooleanEvent($event: boolean) {
    console.log('boolean', $event);
  }

  onNumberEvent($event: number) {
    console.log('number', $event);
  }

  onVoidEvent() {
    console.log('Void event');
  }

  onDateEvent($event: Date) {
    console.log('Date', $event);
  }

  onObjectEvent($event: SelectedDog) {
    console.log('SelectedDog', $event);
  }
}

import { AfterViewInit, Component, Input } from '@angular/core';
import { User } from '../on-changes/on-changes.component';

@Component({
  selector: 'app-componetn-a',
  templateUrl: './component-a.component.html',
})
export class ComponetnAComponent implements AfterViewInit {

  user!: User;

  ngAfterViewInit(): void {
    // setTimeout(() => {
    this.user = { name: 'Rambo', age: 23 };
    // },0);
  }
}


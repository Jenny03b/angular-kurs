import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.css'],
})
export class TemplateSelectorComponent implements AfterViewInit {
  @Input() 
  title!: string;

  @ContentChild('btn')
  button!: ElementRef;
  @ContentChildren('btn')
  buttons!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    console.log('Wstrzyknięto: ', this.button);
    console.log('Wstrzyknięto listę: ', this.buttons);
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-css',
  templateUrl: './template-css.component.html',
  styleUrls: ['./template-css.component.css']
})
export class TemplateCssComponent {

  @Input()
  title!: string;

}

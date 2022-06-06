import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-attribute',
  templateUrl: './template-attribute.component.html',
  styleUrls: ['./template-attribute.component.css']
})
export class TemplateAttributeComponent {

  @Input()
   title!: string;
}

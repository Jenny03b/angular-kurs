import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-more-attributea',
  templateUrl: './template-more-attributea.component.html',
  styleUrls: ['./template-more-attributea.component.css']
})
export class TemplateMoreAttributeaComponent {

  @Input()
  title!: string;

}

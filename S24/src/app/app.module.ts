import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { TemplateAttributeComponent } from './template-attribute/template-attribute.component';
import { TemplateCssComponent } from './template-css/template-css.component';
import { TemplateMoreAttributeaComponent } from './template-more-attributea/template-more-attributea.component';
import { TemplateSelectorComponent } from './template-selector/template-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    TemplateAttributeComponent,
    TemplateCssComponent,
    TemplateMoreAttributeaComponent,
    TemplateSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

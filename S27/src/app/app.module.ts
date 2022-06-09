import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { HostComponent } from './host/host.component';
import { StyleScopeComponent } from './style-scope/style-scope.component';
import { InnerBComponent } from './encapsulation/inner-b/inner-b.component';
import { InnerCComponent } from './host/inner-c/inner-c.component';
import { InnerAComponent } from './style-scope/inner-a/inner-a.component';

const routes: Routes = [
  {
    path: 'style-scope',
    component: StyleScopeComponent,
  },
  {
    path: 'encapsulation',
    component: EncapsulationComponent,
  },
  {
    path: 'host',
    component: HostComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    EncapsulationComponent,
    HostComponent,
    StyleScopeComponent,
    InnerBComponent,
    InnerCComponent,
    InnerAComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

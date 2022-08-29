import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BemVindoRoutingModule } from './bem-vindo-routing.module';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';


@NgModule({
  declarations: [
    BemVindoComponent,
  ],
  imports: [
    CommonModule,
    BemVindoRoutingModule
  ]
})
export class BemVindoModule { }

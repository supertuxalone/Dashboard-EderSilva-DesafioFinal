import { MenuprincipalModule } from './../menuprincipal/menuprincipal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuprincipalModule
  ],
  exports:[
    CabecalhoComponent
  ],
})
export class CabecalhoModule { }

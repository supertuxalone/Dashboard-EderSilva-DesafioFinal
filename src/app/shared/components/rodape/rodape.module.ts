import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape.component';
import { MenuprincipalModule } from '../menuprincipal/menuprincipal.module';

@NgModule({
  declarations: [
    RodapeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuprincipalModule
  ],
  exports: [RodapeComponent],
})
export class RodapeModule { }

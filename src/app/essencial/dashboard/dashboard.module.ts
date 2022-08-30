import { MenuprincipalModule } from './../../shared/components/menuprincipal/menuprincipal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CabecalhoModule } from 'src/app/shared/components/cabecalho/cabecalho.module';
import { RodapeModule } from 'src/app/shared/components/rodape/rodape.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CabecalhoModule,
    RodapeModule,
    MenuprincipalModule,
    SharedModule,
  ]
})
export class DashboardModule { }

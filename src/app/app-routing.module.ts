import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: "home",
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: "dashboard",
    loadChildren: () => import('./essencial/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: "",
    loadChildren: () => import("./essencial/bem-vindo/bem-vindo.module").then(m => m.BemVindoModule),
    //canLoad: [IsLoggedInGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

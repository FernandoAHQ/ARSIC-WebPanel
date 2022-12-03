import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { CommonModule } from '@angular/common';

const routes: Routes = [

  { path: '' , redirectTo:'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule),
    canActivate: [ValidarTokenGuard]
  },
  { path: '**' , redirectTo:'login', pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  // imports: [RouterModule.forRoot(routes, {useHash: true}), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosHoyComponent } from '../ServiciosHoy/servicios-hoy.component';
import { ServiciosComponent } from './servicios.component';
import { ServiciosHistorialComponent } from '../ServiciosHistorial/servicios-historial.component';

const routes: Routes = [

  
  {path: '', component: ServiciosComponent, children:[
    {path: 'hoy',component: ServiciosHoyComponent},
    {path: 'historial',component: ServiciosHistorialComponent},
    {path: '', redirectTo: 'hoy'},


  ]}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearComponent } from './usuarios/crear/crear.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { CrearDeptoComponent } from './departamentos/crear-depto/crear-depto.component';
import { AsignarServiceComponent } from './asignarService/asignar-service.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CommonModule } from '@angular/common';
import { CrearPeriodoComponent } from './periodos/crear-periodo/crear-periodo.component';
import { PeriodosComponent } from './periodos/periodos.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { RankingComponent } from './ranking/ranking.component';
import { InventarioComponent } from './inventario/inventario.component';
import { RegistrarComputadoraComponent } from './inventario/computadoras/registrar-computadora/registrar-computadora.component';
import { RegistrarApComponent } from './inventario/access-point/registrar-ap/registrar-ap.component';
import { RegistrarVlanComponent } from './inventario/vlan/registrar-vlan/registrar-vlan.component';
import { RegistrarTareaComponent } from './tareas/existentes/registrar-tarea/registrar-tarea.component';
import { RegistrarSwitchComponent } from './inventario/switch/registrar-switch/registrar-switch.component';
import { MisReportesComponent } from './user-role/mis-reportes/mis-reportes.component';

const routes: Routes = [

  {path: '', component: DashboardComponent, children:[
    {path: 'inicio',component: InicioComponent},
    {path: '', redirectTo:'inicio'},
    {path:  'usuarios', component: UsuariosComponent},
    {path:  'crearUsuario', component: CrearComponent},
    {path:  'crearUsuario/:id', component: CrearComponent},
    {path:  'departamentos', component: DepartamentosComponent},
    {path:  'periodos', component: PeriodosComponent},
    {path:  'ranking', component: RankingComponent},
    {path:  'bitacora', component: BitacoraComponent},
    {path:  'crearDepto', component: CrearDeptoComponent},
    {path:  'crearPeriodo', component: CrearPeriodoComponent},
    {path:  'asignar', component: AsignarServiceComponent},
    {path:  'servicios', loadChildren: ()=>import('./servicios/servicios.module').then(m=>m.ServiciosModule)},
    {path:  'mis-reportes', component: MisReportesComponent},



    {path:  'tareas', loadChildren: ()=>import('./tareas/tareas.module').then(m=>m.TareasModule)},
    {path:  'inventario', loadChildren: ()=>import('./inventario/inventario.module').then(m=>m.InventarioModule)},
    {path:  'new-task', component: RegistrarTareaComponent},
    {path:  'new-pc', component: RegistrarComputadoraComponent},
    {path:  'new-ap', component: RegistrarApComponent},
    {path:  'new-vlan', component: RegistrarVlanComponent},
    {path:  'new-switch', component: RegistrarSwitchComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

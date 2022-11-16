import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CompartidoModule } from '../compartido/compartido.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearComponent } from './usuarios/crear/crear.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { CrearDeptoComponent } from './departamentos/crear-depto/crear-depto.component';
import { AsignarServiceComponent } from './asignarService/asignar-service.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ServiciosHistorialComponent } from './ServiciosHistorial/servicios-historial.component';
import { ServiciosHoyComponent } from './ServiciosHoy/servicios-hoy.component';
import { ModalDelServicioComponent } from './ServiciosHoy/modal-del-servicio/modal-del-servicio.component';
import { ModalEditUserComponent } from './usuarios/modal-edit-user/modal-edit-user.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { PeriodosComponent } from './periodos/periodos.component';
import { CrearPeriodoComponent } from './periodos/crear-periodo/crear-periodo.component';
import { ModalperiodosComponent } from './periodos/modalperiodos/modalperiodos.component';
import { RankingComponent } from './ranking/ranking.component';
import { VerBitacoraComponent } from './bitacora/ver-bitacora/ver-bitacora.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ComputadorasComponent } from './inventario/computadoras/computadoras.component';
import { AccessPointComponent } from './inventario/access-point/access-point.component';
import { VlanComponent } from './inventario/vlan/vlan.component';
import { SwitchComponent } from './inventario/switch/switch.component';
import { TareasComponent } from './tareas/tareas.component';
import { ToolbarDeptComponent } from './inicio/toolbar-dept/toolbar-dept.component';
import { ToolbarAdminComponent } from './inicio/toolbar-admin/toolbar-admin.component';
import { NewReportComponent } from './user-role/new-report/new-report.component';
import { StatusLabelComponent } from '././servicios/status-label/status-label.component';




@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    CrearComponent,
    DepartamentosComponent,
    CrearDeptoComponent,
    AsignarServiceComponent,
    ServiciosComponent,
    ServiciosHistorialComponent,
    ServiciosHoyComponent,
    ModalDelServicioComponent,
    ModalEditUserComponent,
    BitacoraComponent,
    PeriodosComponent,
    CrearPeriodoComponent,
    ModalperiodosComponent,
    RankingComponent,
    VerBitacoraComponent,
    InventarioComponent,
    ComputadorasComponent,
    AccessPointComponent,
    VlanComponent,
    SwitchComponent,
    TareasComponent,
    ToolbarDeptComponent,
    ToolbarAdminComponent,
    NewReportComponent,
    StatusLabelComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CompartidoModule
  ]
})
export class DashboardModule { }

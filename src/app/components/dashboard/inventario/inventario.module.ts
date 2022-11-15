import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoModule } from 'src/app/components/compartido/compartido.module';
import { InventarioRoutingModule } from './inventario-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { AccessPointComponent } from './access-point/access-point.component';
import { RegistrarComputadoraComponent } from './computadoras/registrar-computadora/registrar-computadora.component';
import { ModificarComputadorasComponent } from './computadoras/modificar-computadoras/modificar-computadoras.component';
import { RegistrarApComponent } from './access-point/registrar-ap/registrar-ap.component';
import { RegistrarVlanComponent } from './vlan/registrar-vlan/registrar-vlan.component';
import { ModificarVlanComponent } from './vlan/modificar-vlan/modificar-vlan.component';
import { ModificarApComponent } from './access-point/modificar-ap/modificar-ap.component';
import { RegistrarSwitchComponent } from './switch/registrar-switch/registrar-switch.component';


@NgModule({
  declarations: [
  
       RegistrarComputadoraComponent,
       ModificarComputadorasComponent,
       RegistrarApComponent,
       RegistrarVlanComponent,
       ModificarVlanComponent,
       ModificarApComponent,
       RegistrarSwitchComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    CompartidoModule,
  ]
})
export class InventarioModule { }

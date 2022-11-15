import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './inventario.component';
import { ComputadorasComponent } from './computadoras/computadoras.component';
import { VlanComponent } from './vlan/vlan.component';
import { AccessPointComponent } from './access-point/access-point.component';
import { SwitchComponent } from './switch/switch.component';
import { RegistrarComputadoraComponent } from './computadoras/registrar-computadora/registrar-computadora.component';

const routes: Routes = [

  
  {path: '', component: InventarioComponent, children:[
    {path: 'computers',component: ComputadorasComponent},
    {path: 'computers/register',component: RegistrarComputadoraComponent},
    {path: 'aps',component: AccessPointComponent},
    {path: 'vlans',component: VlanComponent},
    {path: 'switches',component: SwitchComponent},
    {path: '', redirectTo: 'computers'},


  ]}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }

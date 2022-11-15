import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './tareas.component';
import { ExistentesComponent } from './existentes/existentes.component';
import { TareasBitacoraComponent } from './tareas-bitacora/tareas-bitacora.component';


const routes: Routes = [


  {path: '', component: TareasComponent, children:[
     {path: 'existentes',component: ExistentesComponent},
     {path: 'bitacora',component: TareasBitacoraComponent},
    // {path: 'aps',component: AccessPointComponent},
    // {path: 'vlans',component: VlanComponent},
    // {path: 'switches',component: SwitchComponent},
     {path: '', redirectTo: 'existentes'},


  ]}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }

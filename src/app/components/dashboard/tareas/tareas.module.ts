import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoModule } from 'src/app/components/compartido/compartido.module';
import { TareasRoutingModule } from './tareas-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { ExistentesComponent } from './existentes/existentes.component';
import { TareasBitacoraComponent } from './tareas-bitacora/tareas-bitacora.component';
import { VerTareaComponent } from './existentes/ver-tarea/ver-tarea.component';
import { VerBitacoraComponent } from './tareas-bitacora/ver-bitacora/ver-bitacora.component';
import { RegistrarTareaComponent } from './existentes/registrar-tarea/registrar-tarea.component';



@NgModule({
  declarations: [


  
    ExistentesComponent,
           TareasBitacoraComponent,
           VerTareaComponent,
           VerBitacoraComponent,
           RegistrarTareaComponent
  ],
  imports: [
    CommonModule,
    TareasRoutingModule,
    CompartidoModule,
  ]
})
export class TareasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { CompartidoModule } from 'src/app/components/compartido/compartido.module';
import { ModalDetallesComponent } from './modal-detalles/modal-detalles.component';


@NgModule({
  declarations: [


    ModalDetallesComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    CompartidoModule,
  ]
})
export class ServiciosModule { }

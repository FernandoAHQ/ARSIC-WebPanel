import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { CompartidoModule } from 'src/app/components/compartido/compartido.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    CompartidoModule,
  ]
})
export class ServiciosModule { }

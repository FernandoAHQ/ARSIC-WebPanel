import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// COMPONENTES PROPIOS
import { LoginComponent } from './components/login/login.component';
import { CompartidoModule } from './components/compartido/compartido.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorTokenService } from './Interceptors/interceptor-token.service';
import { CommonModule } from '@angular/common';
import { CalificarComponent } from './components/dashboard/ServiciosHistorial/calificar/calificar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalificarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CompartidoModule,
    CommonModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorTokenService,
      multi: true

    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesByStatusService } from '../../../../../services/services-by-status.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-switch',
  templateUrl: './registrar-switch.component.html',
  styleUrls: ['./registrar-switch.component.css']
})
export class RegistrarSwitchComponent implements OnInit {
  RegisForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private _snackBar: MatSnackBar,
    private Router:Router,
    private ServicesByStatusService: ServicesByStatusService
  ) {
    this.RegisForm =  this.fb.group({
      etiqueta: ['',Validators.required],
      mac: ['',Validators.required],
      serie:['',Validators.required],
      usuario:['',Validators.required],
      password:['',Validators.required],
      marca:['',Validators.required],
      modelo:['',Validators.required],
      ubicacion:['',Validators.required],
    })
   }

  ngOnInit(): void {
  }


  registrarAP(){
    const etiqueta = this.RegisForm.value.etiqueta
    const mac = this.RegisForm.value.mac
    const serie = this.RegisForm.value.serie
    const usuario = this.RegisForm.value.usuario
    const password = this.RegisForm.value.password
    const marca = this.RegisForm.value.marca
    const modelo = this.RegisForm.value.modelo
    const ubicacion = this.RegisForm.value.ubicacion

    const body = {etiqueta, mac, serie, usuario, password, marca, modelo, ubicacion}

    console.log(body);

   this.ServicesByStatusService.PostRegistrarAP(body).subscribe(
     resp=>{

      if(resp.status){

        this.MensajeUsuarioOk(resp.message)

      this.Router.navigateByUrl("/dashboard/inventario/aps")


      }
      else{

        this.MensajeUsuarioOk(resp.message)
      }
     }
   )
  }


  MensajeUsuarioOk(MSG : string){

    this._snackBar.open(MSG,'',{

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })
  }
}

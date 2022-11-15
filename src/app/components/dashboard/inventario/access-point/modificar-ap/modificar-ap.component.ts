import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesByStatusService } from '../../../../../services/services-by-status.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ap } from 'src/app/interfaces/RespApi';
import { RespUpdateAp } from '../../../../../interfaces/RespApi';

@Component({
  selector: 'app-modificar-ap',
  templateUrl: './modificar-ap.component.html',
  styleUrls: ['./modificar-ap.component.css']
})
export class ModificarApComponent implements OnInit {

  RegisForm: FormGroup;

  constructor(
    private fb:FormBuilder, 
    private _snackBar: MatSnackBar,
    private Router:Router,
    private ServicesByStatusService: ServicesByStatusService,
    public dialogRef: MatDialogRef<ModificarApComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ap
  ) {
    this.RegisForm =  this.fb.group({
      etiqueta: [this.data.etiqueta,Validators.required],
      mac: [this.data.mac,Validators.required],
      serie:[this.data.serie,Validators.required],
      usuario:[this.data.usuario,Validators.required],
      password:[this.data.password,Validators.required],
      marca:[this.data.marca,Validators.required],
      modelo:[this.data.modelo,Validators.required],
      ubicacion:[this.data.ubicacion,Validators.required],
    })
   }

  ngOnInit(): void {
  }

  actualizarAP(){

    const etiqueta = this.RegisForm.value.etiqueta
    const mac = this.RegisForm.value.mac
    const serie = this.RegisForm.value.serie
    const usuario = this.RegisForm.value.usuario
    const password = this.RegisForm.value.password
    const marca = this.RegisForm.value.marca
    const modelo = this.RegisForm.value.modelo
    const ubicacion = this.RegisForm.value.ubicacion
    const id = this.data._id

    const body = {etiqueta, mac, serie, usuario, password, marca, modelo, ubicacion, id}

    console.log(body);

   this.ServicesByStatusService.ActualizarAp(body).subscribe(
     resp=>{

      if(resp.status){
        location.reload()
        this.MensajeUsuarioOk(resp.message)

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

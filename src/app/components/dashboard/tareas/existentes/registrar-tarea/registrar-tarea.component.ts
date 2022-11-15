import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServicesByStatusService } from 'src/app/services/services-by-status.service';

@Component({
  selector: 'app-registrar-tarea',
  templateUrl: './registrar-tarea.component.html',
  styleUrls: ['./registrar-tarea.component.css']
})
export class RegistrarTareaComponent implements OnInit {

  RegisForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private _snackBar: MatSnackBar,
    private Router:Router,
    private ServiceByStatusService: ServicesByStatusService
  ) {
    this.RegisForm = this.fb.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
    })
  }

  ngOnInit(): void {

  }

  registerTask(){
    const name = this.RegisForm.value.name;
    const description = this.RegisForm.value.description;

    this.ServiceByStatusService.registrarTarea(name, description).subscribe(
      resp=>{
        if(resp.status == true){
          this.MensajeUsuarioOk();
        }else{
          this.error("Ocurrió un error.");
        }
      }
    )
  }

  MensajeUsuarioOk(){

    const mensaje = "¡Tarea creada con Exito!"

    this._snackBar.open(mensaje,'',{

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })

    location.reload();
  }

  error(mensaje : string){

    this._snackBar.open(mensaje,'',{

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })

  }

}

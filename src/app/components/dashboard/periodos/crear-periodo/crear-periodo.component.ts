import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicesByStatusService } from '../../../../services/services-by-status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-periodo',
  templateUrl: './crear-periodo.component.html',
  styleUrls: ['./crear-periodo.component.css']
})
export class CrearPeriodoComponent implements OnInit {

  RegisForm: FormGroup;

  constructor(
    private Router:Router,
    private fb:FormBuilder,
    private _snackBar: MatSnackBar,
    private ServicesByStatusService: ServicesByStatusService
    ) {

    this.RegisForm =  this.fb.group({
      name: ['',Validators.required],
      starDate: ['',Validators.required],
      finalDate:['',Validators.required],
    })


  }

  ngOnInit(): void {
  }



  registrarPeriodo(){

    const name = this.RegisForm.value.name
    const startDate = this.RegisForm.value.starDate
    const finalDate = this.RegisForm.value.finalDate

    this.ServicesByStatusService.CrearNuevoPeriodos(name,startDate,finalDate).subscribe(
      resp=>{
          console.log(resp);

        if(resp.status){
          this.MensajeOk(resp.periodoNuevo.name)
          this.Router.navigateByUrl("dashboard/periodos")
        }
        else{
          this.MensajeNo(resp.message)
        }

      }
    )


  }


  MensajeOk(msg : string){

    const mensaje = `Se creó correctamente el periodo ${msg} `

    this._snackBar.open(mensaje,'',{

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })
  }

  MensajeNo(msg : string){

    const mensaje = `${msg}`

    this._snackBar.open(mensaje,'',{

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })
  }

}

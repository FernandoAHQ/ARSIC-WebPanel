import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Department, RespDepartment } from 'src/app/interfaces/InterfaceAllDepartment';
import { ServicesByStatusService } from '../../../../../services/services-by-status.service';
import { Router } from '@angular/router';
import { Computer } from 'src/app/interfaces/RespApi';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Status {
  value: string;
}

@Component({
  selector: 'app-modificar-computadoras',
  templateUrl: './modificar-computadoras.component.html',
  styleUrls: ['./modificar-computadoras.component.css']
})
export class ModificarComputadorasComponent implements OnInit {

  constructor(
    private fb:FormBuilder, 
    private _snackBar: MatSnackBar,
    private Router:Router,
    private ServicesByStatusService:ServicesByStatusService,
    public dialogRef: MatDialogRef<ModificarComputadorasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Computer
    ) { 
      this.RegisForm =  this.fb.group({
        Departamento: [this.data.department,Validators.required],
        Folio: [this.data.folio,Validators.required],
        Status:[this.data.status,Validators.required],
      })
    }

  RegisForm: FormGroup;
  Deparments!: Department[];

  DeparmentSelected: string  = ""; 
  StatusSelected:    string  = ""; 


  StatusAll: Status[] = [
    {value: 'Activo'},
    {value: 'Inactivo'},
    {value: 'Mantenimiento'},
  ];

  ngOnInit(): void {
    this.getDepartments()
    this.DeparmentSelected=this.data._id
    this.StatusSelected=this.data.status
  }

  getDepartments(){

    this.ServicesByStatusService.Get_Departments().subscribe(
      resp=>{
        this.Deparments = resp.departments;
        console.log(this.Deparments);
      }
    )

  }


  actualizarPC(){

    const deparment = this.RegisForm.value.Departamento
    const folio = this.RegisForm.value.Folio
    const status = this.RegisForm.value.Status
    const id= this.data._id
    console.log("===>" + id);

    this.ServicesByStatusService.ActualizarPC(id,deparment, folio, status).subscribe(

      
      
      
    )

    
    location.reload(); 

  }


  MensajeUsuarioOk(MSG : string){

    const mensaje = "Se creó Actualizo la computadora "+ `${MSG}` + " !!!"
    
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

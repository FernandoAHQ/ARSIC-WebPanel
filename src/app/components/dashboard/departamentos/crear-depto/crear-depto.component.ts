import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import {  } from '../../../../services/registra-usuario.service';
import { RegistrarDeptoService } from '../../../../services/registrar-depto.service';
import { AllUsersTableService } from '../../../../services/all-users-table.service';
import { DataUsers } from 'src/app/interfaces/InterfaceAllUser';
import { Router } from '@angular/router';



@Component({
  selector: 'app-crear-depto',
  templateUrl: './crear-depto.component.html',
  styleUrls: ['./crear-depto.component.css']
})
export class CrearDeptoComponent implements OnInit {






  role = new FormControl('', Validators.required);
  DataUsers :  DataUsers[] = [];

  DeptoForm: FormGroup;

  constructor(
    private Router:Router,
    private fb:FormBuilder,
    private _snackBar: MatSnackBar,
    private RegistrarDeptoService: RegistrarDeptoService,
    private AllUsersTableService: AllUsersTableService ) {

      this.DeptoForm =  this.fb.group({
        name: ['',Validators.required],
        user: ['',Validators.required],
        ubication:['',Validators.required],

      })
     }

     get _Users(){

      return this.AllUsersTableService.DataTable

      }

    ngOnInit(): void {

      this.AllUsersTableService.Get_UserAPI("USER_ROLE",1).subscribe(
        resp=> this.DataUsers = resp.users as DataUsers[]
        )

    }



  CrearDepto(){
    // const name = this.DeptoForm.value.name
    // const user = this.DeptoForm.value.user
    // const role = this.DeptoForm.value.role
    // const password = this.DeptoForm.value.password

    const {  name, user, ubication} = this.DeptoForm.value

    console.log({  name, user, ubication})

       this.RegistrarDeptoService.registrar({  name, user, ubication}).subscribe(
        resp=> this.toast(name)
        , error => this.error('Se produjo un error: ' + error.error.message)
        )
      window.location.reload();
  }



  toast(dep : string){

    const mensaje = "Se creó correctamente el departamento: "+ `${dep}`

    this._snackBar.open(mensaje,'',{

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })
  }

    error(mensaje : string){

    this._snackBar.open(mensaje,'',{

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })

  }
}

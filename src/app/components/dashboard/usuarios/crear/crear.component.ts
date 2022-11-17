import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistraUsuarioService } from '../../../../services/registra-usuario.service';
import { Router } from '@angular/router';

interface Roles {
  value: string;
  viewValue: string;
}





@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})



export class CrearComponent implements OnInit {



  roles: Roles[] = [
    {value: 'ADMIN_ROLE', viewValue: 'ADMIN_ROLE'},
    {value: 'SITE_ROLE', viewValue: 'SITE_ROLE'},
    {value: 'USER_ROLE', viewValue: 'USER_ROLE'},
  ];

  role = new FormControl('', Validators.required);


  RegisForm: FormGroup;

  constructor(
    private Router:Router,
    private fb:FormBuilder,
    private _snackBar: MatSnackBar,
    private RegistraUsuarioService: RegistraUsuarioService) {

      this.RegisForm =  this.fb.group({
        name: ['',Validators.required],
        user: ['',Validators.required],
        role:['',Validators.required],
        password: ['',Validators.required],
      })
     }

  ngOnInit(): void {
  }


  registrarUsuario(){
    const name = this.RegisForm.value.name
    const user = this.RegisForm.value.user
    const role = this.RegisForm.value.role
    const password = this.RegisForm.value.password

    this.RegistraUsuarioService.registrar(name,user,role,password)
      .subscribe( resp =>{

        this.MensajeUsuarioOk(name)
        this.Router.navigateByUrl("/dashboard/usuarios")

      }, error=> this.error('Se produjo un error: ' + error.error.message))

  }



  MensajeUsuarioOk(usuario : string){

    const mensaje = "Se creó correctamente el usuario "+ `${usuario}`

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



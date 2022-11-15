import { _isNumberValue } from '@angular/cdk/coercion';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { User } from '../../interfaces/Interfaces';
import { SocketWebService } from '../../services/socket-web.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup
  cargandospinner = false;

  constructor(
      private fb:FormBuilder,
      private _snackBar: MatSnackBar,
      private router: Router,
      private LoginService: LoginService,
      ) {

      this.form =  this.fb.group({
        user: ['',Validators.required],
        password: ['',Validators.required],
      })

  }

  ngOnInit(): void {
  }

  get _User(){ return this.LoginService.usuario}

  ingresar(){
    const user = this.form.value.user
    const password = this.form.value.password

    this.LoginService.login(user, password)
      .subscribe( resp =>{
        if(resp){

          this.DarBievenida(this._User.name)

        } else{

        }

      })

  }

DarBievenida(nombre : string){

    const mensaje = "¡Bienvenido, "+ `${nombre}` + "!"
    this.loading()
    this._snackBar.open(mensaje,'',{

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })

    //this.loading()

  }

  error(){

    this._snackBar.open('Usuario y/o contraseña incorrectos!!','',{

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })

  }

  loading(){

      this.cargandospinner=true
      setTimeout(() => {
        this.cargandospinner=false
        this.router.navigate(['dashboard'])
      },2000);
  }


}

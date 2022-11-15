import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../services/login.service';
import { SocketWebService } from '../services/socket-web.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate {

  constructor( private LoginService: LoginService, private router: Router, private SocketWebService: SocketWebService){


  }

  canActivate(): Observable <boolean> | boolean  {
    
    return this.LoginService.validarToken()
    .pipe(
      tap(valid =>{

        if(!valid){
          this.router.navigateByUrl('/login');
          this.SocketWebService.disconnect();
        }else{
          this.SocketWebService.connect()
        }

      })
    )
  }
  
}

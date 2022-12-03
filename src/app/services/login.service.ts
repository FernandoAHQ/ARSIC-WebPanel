import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginInterface, User } from '../interfaces/Interfaces';
import { map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private baseURL : string = environment.baseURL + '/api';
  private _usuario!: User;

  constructor( private http: HttpClient) {

   }

   get usuario(){return {...this._usuario}}

   login( username: string, password: string){

      const url= `${this.baseURL}/auth/login`;
      const body= {username, password};
      console.log(username)


     return this.http.post<LoginInterface>(url,body)
      .pipe(
        tap(resp => {
       //   console.log(resp);
          if(resp.status){
            localStorage.setItem('role',resp.user!.role!);
            if(resp.deptartament)localStorage.setItem('dept',resp.deptartament!.name!);
            localStorage.setItem('name',resp.user!.name!);
            localStorage.setItem('token',resp.accessToken!);
            localStorage.setItem('menu',JSON.stringify(resp.menu!));
            localStorage.setItem('IdAdmin', resp.user?._id!);

            this._usuario=resp.user!;
          }
          else if (resp.status!){console.log(resp.message);}
        }),
        catchError( err => of(false) )

      )


  }

  logout(){
    localStorage.clear
  }

  validarToken (): Observable<boolean> {

    const url= `${this.baseURL}/auth/renew`;
    const token =  localStorage.getItem('token') || ''


    const headers= new HttpHeaders().set
    ('Authorization', (` Bearer ${token}`) )

    return this.http.get<LoginInterface> (url,{headers})
    .pipe(
      map(resp=>{

        return resp.status;

      }),
      catchError(err => of(false))
    )
    ;
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { DataUsers, RespAlluser } from '../interfaces/InterfaceAllUser';
import { map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { GetAllPeriodos, Period } from '../interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class AllUsersTableService {

  private baseURL: string = environment.baseURL + '/api';
  private AllUsers!: DataUsers[];
  private AllPeriods!: Period[];

  get DataTable(){ return {...this.AllUsers}}
  get DataPeriods(){ return {...this.AllPeriods}}

  constructor(private http: HttpClient) {

  }

  Get_UserAPI(usuario : string, page :  any ){

    const url= `${this.baseURL}/users/all/${usuario}?page=${page}`;
    console.log(url);
    return this.http.get<RespAlluser>(url)
    .pipe(
      tap(resp => {
        if(resp.status){
          this.AllUsers= resp.users!;
        }
      })

    )
  }

  Get_User_AllAPI(usuario : string){

    const url= `${this.baseURL}/users/allz/${usuario}`;
    console.log(url);
    return this.http.get<RespAlluser>(url)
    .pipe(
      tap(resp => {
        if(resp.status){
          this.AllUsers= resp.users!;
        }
      })

    )
  }




  GetPeriodosAPI(page:any){

    const url= `${this.baseURL}/periods/all?page=${page}`;
    return this.http.get<GetAllPeriodos>(url)
    .pipe(
      tap(resp => {
        if(resp.status){
          this.AllPeriods= resp.periods;
        }
      })

    )


  }

}

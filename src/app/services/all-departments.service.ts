import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Department, RespDepartment } from '../interfaces/InterfaceAllDepartment';

@Injectable({
  providedIn: 'root'
})
export class AllDepartmentsService {

  private baseURL: string = environment.baseURL + '/api';
  private AllDepartaments!: Department[];

  get DataTable(){ return {...this.AllDepartaments}}

  constructor( private http: HttpClient) {

   }


   AllDepartments_API(){

    const url = `${this.baseURL}/departments/all`;

    return this.http.get<RespDepartment>(url).pipe(
        tap(resp=>{
          if(resp.status){
            this.AllDepartaments=resp.departments!;
          }

        })

    )



   }
}

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { deptoForm } from '../interfaces/deptoForm.interface';


@Injectable({
  providedIn: 'root'
})
export class RegistrarDeptoService {

  private baseURL : string = environment.baseURL + '/api';

  constructor(private http: HttpClient) { }


  registrar(deptoForm : deptoForm){

    const url= `${this.baseURL}/departments/create`;
    return this.http.post(url,deptoForm)




  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, Observer, of, Subject, tap } from 'rxjs';
import { Service } from 'src/app/interfaces/Interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  servicios : Service[];
  servicios$ : Subject<Service[]>
  categories : string[];

  private baseURL: string = environment.baseURL + '/api';


  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar) {
    this.categories = [];
    this.servicios = [];
    this.servicios$ = new Subject;
  }




  leerServices(data : any[]){


    this.servicios = [];
      data.forEach(element => {

        element.status = this.statusTranslate(element);
        this.servicios.push(element as Service);
      });
        this.servicios$.next(this.servicios);

    this.notificacion();

  }

  leerReports(data : any[]){


    this.servicios = [];
      data.forEach(element => {

        element.status = this.statusTranslate(element);
        this.servicios.push(element as Service);
      });
        this.servicios$.next(this.servicios);


  }

    getServicios():Observable<Service[]>{
        return this.servicios$.asObservable();
    }


    notificacion(){

      console.log("estoy en notificacion");
      if(this.servicios.length>0){
      const mensaje =  `Nuevo servicio de ${this.servicios[0].report.department.name} "${this.servicios[0].report.title}"`;

      this._snackBar.open(mensaje,'',{

        duration: 4000,
        horizontalPosition: 'right',
        verticalPosition: 'top',

      })
      }

    }

    getLength(){
      return this.servicios.length;
    }

    statusTranslate(element : Service):string{

      switch(element.status){
        case 'assigned':
          return 'Asignado';

        case 'not-assigned':
          return 'Sin Asignar';

        case 'pending':
          return 'Pendiente';

          case 'cancelled':
            return 'Cancelado';

            case 'finalized':
              return 'Finalizado';
      }
      return "Otro";
    }



}

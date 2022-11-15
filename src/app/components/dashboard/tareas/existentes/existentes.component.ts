import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tarea } from 'src/app/interfaces/Interfaces';
import { ServicesByStatusService } from '../../../../services/services-by-status.service';
import { Status } from '../../../../interfaces/RespApi';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../../../../environments/environment';
import { VerTareaComponent } from './ver-tarea/ver-tarea.component';


@Component({
  selector: 'app-existentes',
  templateUrl: './existentes.component.html',
  styleUrls: ['./existentes.component.css']
})
export class ExistentesComponent implements OnInit {



    constructor(
      public dialog: MatDialog,
      private ServicesByStatusService: ServicesByStatusService,
      private activatedRoute: ActivatedRoute,
      private router:Router
      ) { }

    ngOnInit(): void {


      this.activatedRoute.queryParams.subscribe((querys:any)=>{



        if(!querys.page){
          this.PaginaActual= 1;
          }
        else{this.PaginaActual=querys.page}


        console.log(querys.page+ "     " + querys.value);

        this._getInitTasks(this.PaginaActual);

      })



    }

    get _Users(){

      return this.ServicesByStatusService.DataTasks

    }


    Cargando= false;
    // existe= false;
    PaginaActual : number =1;
    TotalResultados: number = 0;

    ELEMENT_DATA_TABLE: Tarea[] = this._Users;
    displayedColumns: string[] = ['name', 'description' ,'assignments','Acciones'];
    dataSource = new  MatTableDataSource <Tarea>(this.ELEMENT_DATA_TABLE);




    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    _getInitTasks( page: number){

      this.Cargando=true;
      this.ServicesByStatusService.Get_TasksAPI(page).subscribe(
        resp=> {



          const url = environment.baseURL

          this.dataSource.data = resp.tasks as Tarea[]

          this.dataSource.data.forEach((elem)=>{

              elem.asignments.forEach((person)=>{
                person.assignedTo.image = url + "/api/images/users/" + person.assignedTo.image;
              })
      //      elem.evidenceImage= `${url}/images/services/${elem.evidenceImage}`

          });


          this.TotalResultados =  resp.totalResults;
          //console.log(resp);
          this.Cargando= false;
        }


      )
    }


    cambioStatus(newStatus : any){

      // if(newStatus=="not-assigned"){
      //   this.existe=false
      // }
      // else{this.existe=true}
      this.router.navigateByUrl(`dashboard/tareas/existentes?page=1&value=${newStatus}`)
      console.log(newStatus);
    }






    ver(task : Task  ){

      this.dialog.open(VerTareaComponent, {height: '600px', width: '450px', data:task})

      console.log(task);

    }

    transform(value: string, args: any[]): string {
      const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
      const trail = args.length > 1 ? args[1] : '...';
      return value.length > limit ? value.substring(0, limit) + trail : value;
     }

  }

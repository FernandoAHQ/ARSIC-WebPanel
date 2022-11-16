import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from 'src/app/interfaces/RespApi';
import { ServicesByStatusService } from '../../../services/services-by-status.service';
import {MatPaginator} from '@angular/material/paginator';
import { Status } from '../../../interfaces/RespApi';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';
import { CalificarComponent } from './calificar/calificar.component';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../../../environments/environment';
import { ModalDelServicioComponent } from '../ServiciosHoy/modal-del-servicio/modal-del-servicio.component';
import { ModalDetallesComponent } from '../servicios/modal-detalles/modal-detalles.component';



@Component({
  selector: 'app-servicios-historial',
  templateUrl: './servicios-historial.component.html',
  styleUrls: ['./servicios-historial.component.css']
})
export class ServiciosHistorialComponent implements OnInit {

  Levels!: Status[];

  status_selected: string = "not-assigned" ;

  constructor(
    public dialog: MatDialog,
    private ServicesByStatusService: ServicesByStatusService,
    private activatedRoute: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {

    this.cargarStatus()

    this.activatedRoute.queryParams.subscribe((querys:any)=>{



      if(!querys.page){
        this.PaginaActual= 1;
        }
      else{this.PaginaActual=querys.page}

      if(!querys.value){
        this.status_selected ="assigned"
        }
      else{this.status_selected=querys.value}

      console.log(querys.page+ "     " + querys.value);

      this._getInitServices(this.status_selected, this.PaginaActual);

    })



  }

  get _Users(){

    return this.ServicesByStatusService.DataTable

  }


  Cargando= false;
  // existe= false;
  PaginaActual : number =1;
  TotalResultados: number = 0;

  ELEMENT_DATA_TABLE: Service[] = this._Users;
  displayedColumns: string[] = ['Titulo', 'Usuario' ,'Status', 'Asignado' ,"Nivel",'Acciones'];
  dataSource = new  MatTableDataSource <Service>(this.ELEMENT_DATA_TABLE);




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  _getInitServices(status : string, page: number){

    this.Cargando=true;
    this.ServicesByStatusService.Get_ServicesAPI(status,page).subscribe(
      resp=> {

        console.log(resp);

        const url = environment.baseURL

        this.dataSource.data = resp.services as Service[]

        this.dataSource.data.forEach((elem)=>{

          if(elem.status == 'Sin Asignar' ) elem.assignedTo = {name: "", }
          elem.evidenceImage= `${url}/api/images/services/${elem.evidenceImage}`

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
    this.router.navigateByUrl(`dashboard/servicios/historial?page=1&value=${newStatus}`)
    console.log(newStatus);
  }


  cargarStatus(){

    this.ServicesByStatusService.Get_StatusAPI().subscribe(
      resp => {
        this.Levels=resp.status

      }
    )

  }



  calificar(servicio : Service  ){

    this.dialog.open(CalificarComponent, {height: '600px', width: '450px', data:servicio})


    console.log(servicio);

  }

  detalles(servicio : Service  ){

    this.dialog.open(ModalDetallesComponent, {height: '600px', width: '450px', data:servicio})


    console.log(servicio);

  }


  asignar (servicio:Service ){

    this.dialog.open(ModalDelServicioComponent, {width: '30%', height: '80%',data:servicio})


    console.log(servicio);

  }

}

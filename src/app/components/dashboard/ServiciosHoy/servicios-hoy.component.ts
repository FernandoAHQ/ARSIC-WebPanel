import { Component, OnInit } from '@angular/core';
import { ChicoServicio } from 'src/app/interfaces/RespApi';
import { ServicesByStatusService } from '../../../services/services-by-status.service';
import { MatTableDataSource } from '@angular/material/table';
import { Severity } from '../../../interfaces/RespApi';
import { ServiciosService } from 'src/app/services/admin-role/servicios.service';
import { Service } from 'src/app/interfaces/Interfaces';
import { SocketWebService } from '../../../services/socket-web.service';
import { AssignInterface } from '../../../interfaces/Interfaces';
import { MatDialog } from '@angular/material/dialog';
import { ModalDelServicioComponent } from './modal-del-servicio/modal-del-servicio.component';
import { CalificarComponent } from '../ServiciosHistorial/calificar/calificar.component';
import { ModalDetallesComponent } from '../servicios/modal-detalles/modal-detalles.component';


@Component({
  selector: 'app-servicios-hoy',
  templateUrl: './servicios-hoy.component.html',
  styleUrls: ['./servicios-hoy.component.css']
})
export class ServiciosHoyComponent implements OnInit {

  UserSite_selected: string = "Carlos Castillo";
  Severities_selected: string= "Alta";

  displayedColumns: string[];
  ELEMENT_DATA_TABLE: Service[];
  dataSource : MatTableDataSource <Service>;






  constructor(
    private socketWebService: SocketWebService,
    private ServicesByStatusService: ServicesByStatusService,
    public dialog: MatDialog,
    public serviciosServices : ServiciosService) {
      this.displayedColumns= [ 'Titulo', 'Departamento','Status', 'Categoria', "Acciones"];
      this.ELEMENT_DATA_TABLE = this.serviciosServices.servicios;
      this.dataSource = new  MatTableDataSource <Service>(this.ELEMENT_DATA_TABLE);

    }

    notEmpty:boolean = false;

  ngOnInit(): void {
      this.serviciosServices.getServicios().subscribe((serv)=>{
        this.dataSource.data = serv as Service[];

        console.log(this.dataSource.data.length)
      });


  }

  get _Users(){

    return this.ServicesByStatusService.DataTable

  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }





  asignar (servicio:Service ){

    this.dialog.open(ModalDelServicioComponent, {width: '40%', height: '70%',data:servicio})


    console.log(servicio);

  }

  calificar(servicio : Service  ){

    this.dialog.open(CalificarComponent, {height: '600px', width: '450px', data:servicio})


    console.log(servicio);

  }

  detalles(servicio : Service  ){

    this.dialog.open(ModalDetallesComponent, {height: '600px', width: '450px', data:servicio})


    console.log(servicio);

  }



}

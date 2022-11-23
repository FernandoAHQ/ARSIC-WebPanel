import { Component, OnInit } from '@angular/core';
// import { ServicesByStatusService } from '../../../services/services-by-status.service';
import { MatTableDataSource } from '@angular/material/table';
import { ServiciosService } from 'src/app/services/admin-role/servicios.service';
import { Service } from 'src/app/interfaces/Interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DetallesReporteComponent } from './detalles/detalles.component';


@Component({
  selector: 'app-mis-reportes',
  templateUrl: './mis-reportes.component.html',
  styleUrls: ['./mis-reportes.component.css']
})
export class MisReportesComponent implements OnInit {


  displayedColumns: string[];
  ELEMENT_DATA_TABLE: Service[];
  dataSource : MatTableDataSource <Service>;






  constructor(

    public dialog: MatDialog,
    public serviciosServices : ServiciosService) {
      this.displayedColumns= ['Titulo', 'Fecha','Status', 'Acciones'];
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



  Detalles(servicio:Service){

    this.dialog.open(DetallesReporteComponent, {width: '600px', height: '70%',data:servicio})

  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}

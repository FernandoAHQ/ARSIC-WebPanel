import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Ap } from 'src/app/interfaces/RespApi';
import { ServicesByStatusService } from '../../../../services/services-by-status.service';
import { ModificarApComponent } from './modificar-ap/modificar-ap.component';

@Component({
  selector: 'app-access-point',
  templateUrl: './access-point.component.html',
  styleUrls: ['./access-point.component.css']
})
export class AccessPointComponent implements OnInit {

  constructor(private ServicesByStatusService: ServicesByStatusService,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.CargarAps()
  }

  get data(){
    return this.ServicesByStatusService.DataAps
  }

  value =""
  Cargando= false;
  // existe= false;
  PaginaActual : number =1;
  TotalResultados: number = 0;

  ELEMENT_DATA_TABLE: Ap[] = this.data;
  displayedColumns: string[] = ['Etiqueta', 'Mac','Serie', 'Usuario', 'Password',  'Marca', 'Modelo', 'Ubicacion', 'Acciones'];
  dataSource = new  MatTableDataSource <Ap>(this.ELEMENT_DATA_TABLE);


  CargarAps(){
    this.ServicesByStatusService.GetInventoryAp("aps").subscribe(
      resp=>{
        this.dataSource.data = resp.aps as Ap[];
        this.TotalResultados =  resp.totalResults;
        this.Cargando= false;

      }
    )
  }




  editar(ap:Ap){

    this.dialog.open(ModificarApComponent, {width: '400px',data:ap})


  }

}


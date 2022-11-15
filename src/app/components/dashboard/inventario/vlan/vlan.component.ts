import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { VLAN } from 'src/app/interfaces/RespApi';
import { ServicesByStatusService } from '../../../../services/services-by-status.service';
import { ModificarVlanComponent } from './modificar-vlan/modificar-vlan.component';

@Component({
  selector: 'app-vlan',
  templateUrl: './vlan.component.html',
  styleUrls: ['./vlan.component.css']
})
export class VlanComponent implements OnInit {

  constructor( 
    public dialog: MatDialog,
    private ServicesByStatusService:ServicesByStatusService , ) { }

  ngOnInit(): void {
    this.CargarVlan()
  }

  get data(){  
    
    return this.ServicesByStatusService.DataVlan
  
  }

  Cargando= false;
  // existe= false;
  PaginaActual : number =1;
  TotalResultados: number = 0;

  ELEMENT_DATA_TABLE: VLAN[] = this.data;
  displayedColumns: string[] = ['Vlan', 'Name','Ip', 'Mask', 'Gateway', 'Broadcast', 'StaticStart', 'StaticEnd', 'DynamicStart', 'DynamicEnd' , 'Acciones'];
  dataSource = new  MatTableDataSource <VLAN>(this.ELEMENT_DATA_TABLE);

  CargarVlan(){

    this.ServicesByStatusService.GetInventoryVlan("vlans").subscribe(
      resp=>{
        this.dataSource.data = resp.vlans as VLAN[];
        this.TotalResultados =  resp.totalResults;
        this.Cargando= false;

      }
    )

  }



  editar(vlan:VLAN){

    this.dialog.open(ModificarVlanComponent, {width: '400px',data:vlan})


  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Switch } from 'src/app/interfaces/RespApi';
import { ServicesByStatusService } from '../../../../services/services-by-status.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  constructor( private ServicesByStatusService: ServicesByStatusService) { }

  ngOnInit(): void {
    this.CargarSwitches()
  }

  get data(){  
    
    return this.ServicesByStatusService.DataSwitches
  
  }

  Cargando= false;
  // existe= false;
  PaginaActual : number =1;
  TotalResultados: number = 0;

  ELEMENT_DATA_TABLE: Switch[] = this.data;
  displayedColumns: string[] = ['Name', 'User','Password', 'Building', 'Ip',"Mask","AdminPorts","TrunkPorts","Brand","Model","Serie","EthernetPorts","GigabitPorts","SfpPorts","PoePorts","Console"];
  dataSource = new  MatTableDataSource <Switch>(this.ELEMENT_DATA_TABLE);


  CargarSwitches(){

    this.ServicesByStatusService.GetInventorySwitches("switches").subscribe(
      resp=>{
        this.dataSource.data = resp.switches as Switch[];
        this.TotalResultados =  resp.totalResults;
        this.Cargando= false;

      }
    )

  }

}

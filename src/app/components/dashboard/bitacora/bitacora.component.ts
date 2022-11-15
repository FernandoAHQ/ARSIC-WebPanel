import { Component, OnInit } from '@angular/core';
import { Bitacora } from 'src/app/interfaces/Interfaces';
import { ServicesByStatusService } from '../../../services/services-by-status.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { VerBitacoraComponent } from './ver-bitacora/ver-bitacora.component';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent implements OnInit {

  datas!: Bitacora[];
  value=""

  constructor(
    private ServicesByStatusService: ServicesByStatusService,
    private activatedRoute: ActivatedRoute,
    private Router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((querys:any)=>{

      

      if(!querys.page){
        this.PaginaActual= 1;
        }
      else{this.PaginaActual=querys.page}

      if(!querys.value){
        this.value="bitacora"
      }
      else{this.value="bitacora"}

      this.GetInitBitacora( this.PaginaActual );

    })

  }

  get _Users(){  
    
    return this.ServicesByStatusService.DataBitacora
  
  }

  Cargando= false;
  // existe= false;
  PaginaActual : number =1;
  TotalResultados: number = 0;

  ELEMENT_DATA_TABLE: Bitacora[] = this._Users;
  displayedColumns: string[] = ['Descripcion', 'Solucion', 'Acciones'];
  dataSource = new  MatTableDataSource <Bitacora>(this.ELEMENT_DATA_TABLE);



  GetInitBitacora(PaginaActual: any){

    this.Cargando=true;
    this.ServicesByStatusService.GetBitacora(PaginaActual).subscribe(
      resp=>{
        
        this.dataSource.data = resp.bitacora as Bitacora[];
        this.TotalResultados =  resp.totalResults;
        this.Cargando= false;
      }
    )

  }


  Ver(datos: Bitacora){

    this.dialog.open(VerBitacoraComponent, {height: '300px', width: '450px', data: datos})

  }



}

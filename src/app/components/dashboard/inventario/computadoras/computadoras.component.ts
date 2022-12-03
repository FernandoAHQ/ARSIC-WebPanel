import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Computer } from 'src/app/interfaces/RespApi';
import { ServicesByStatusService } from '../../../../services/services-by-status.service';
import { ModificarComputadorasComponent } from './modificar-computadoras/modificar-computadoras.component';
import { ActivatedRoute } from '@angular/router';
import { RegistrarComputadoraComponent } from './registrar-computadora/registrar-computadora.component';

@Component({
  selector: 'app-computadoras',
  templateUrl: './computadoras.component.html',
  styleUrls: ['./computadoras.component.css']
})
export class ComputadorasComponent implements OnInit {

  constructor(

    public dialog: MatDialog,
    private ServicesByStatusService:ServicesByStatusService ,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((querys:any)=>{



      if(!querys.page){
        this.PaginaActual= 1;
        }
      else{this.PaginaActual=querys.page}

      if(!querys.value){
        this.value="computers"
      }
      else{this.value="computers"}

      this.CargarCompus( this.PaginaActual );

    })

  }
  get data(){

    return this.ServicesByStatusService.DataInventory

  }

  value=""
  Cargando= false;
  // existe= false;
  PaginaActual : number =1;
  TotalResultados: number = 0;

  ELEMENT_DATA_TABLE: Computer[] = this.data;
  displayedColumns: string[] = ['ubication', 'folio','name', 'Acciones'];
  dataSource = new  MatTableDataSource <Computer>(this.ELEMENT_DATA_TABLE);


  CargarCompus(page : any){

    this.ServicesByStatusService.GetInventory("computers", page).subscribe(
      resp=>{
        this.dataSource.data = resp.computers as Computer[];
        this.TotalResultados =  resp.totalResults;
        this.Cargando= false;

      }
    )

  }

  editar(pc:Computer){

    this.dialog.open(ModificarComputadorasComponent, {width: '70vw',data:pc})


  }


  register(){

    this.dialog.open(RegistrarComputadoraComponent, {width: '70vw'})


  }


}

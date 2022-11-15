import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Period } from 'src/app/interfaces/Interfaces';
import { AllUsersTableService } from '../../../services/all-users-table.service';

@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.component.html',
  styleUrls: ['./periodos.component.css']
})
export class PeriodosComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute,
    private AllUsersTableService: AllUsersTableService
  ) { }

  PaginaActual : number =1;
  Cargando= false;
  TotalResultados: number = 0;
  value="all"


  ngOnInit(): void {


        this.activatedRoute.queryParams.subscribe((querys:any)=>{
        //console.log(querys.page)
        if(!querys.page){
          this.PaginaActual= 1;
        }
        else{this.PaginaActual=querys.page}
        

        this._getInitPeriodos(this.value, this.PaginaActual)
      })
  }


  get _Periods(){  
    
    return this.AllUsersTableService.DataPeriods
  
    }



   

  ELEMENT_DATA_TABLE: Period[] = this._Periods;
  displayedColumns: string[] = ['Nombre', 'Fecha Inicio', 'Fecha Final'];
  dataSource = new  MatTableDataSource <Period>(this.ELEMENT_DATA_TABLE);







  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  _getInitPeriodos(role : string, page: number){ 

    //console.log(`${role}     ${page}`);
    this.Cargando=true;
    this.AllUsersTableService.GetPeriodosAPI(page).subscribe(
      resp=> {
        this.dataSource.data = resp.periods as Period[]
        this.TotalResultados= resp.totalResults;
        console.log(resp)
        this.Cargando= false;
      }

    )
  }

}

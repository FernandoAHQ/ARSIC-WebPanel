import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Ranking, RankingElement } from 'src/app/interfaces/interfaceRanking';
import { ServicesByStatusService } from '../../../services/services-by-status.service';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})



export class RankingComponent implements OnInit {

  ranking!: RankingElement [];

  get _Users(){

    return this.ranking

    }



  constructor(
    private ServicesByStatusService:ServicesByStatusService,

  ) { }

  ELEMENT_DATA_TABLE: RankingElement[] = this._Users;
  displayedColumns: string[] = ['Foto', 'Nombre', 'Puntos'];
  dataSource = new  MatTableDataSource <RankingElement>(this.ELEMENT_DATA_TABLE);


  ngOnInit(): void {

    this.cargarRanking()

  }



  cargarRanking(){


    const url= environment.baseURL;

    this.ServicesByStatusService.GetRanking().subscribe(
      resp=>{

        this.dataSource.data = resp.periodo.ranking as RankingElement[]

        this.dataSource.data.forEach((elem)=>{


          elem.user.image= `${url}/api/images/users/${elem.user.image}`

        });

      }
    )



  }



}

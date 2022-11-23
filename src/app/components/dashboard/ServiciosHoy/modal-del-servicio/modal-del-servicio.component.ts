import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssignInterface, Service } from '../../../../interfaces/Interfaces';
import { ServiciosService } from 'src/app/services/admin-role/servicios.service';
import { SocketWebService } from '../../../../services/socket-web.service';
import { ServicesByStatusService } from '../../../../services/services-by-status.service';
import { ChicoServicio, Severity } from 'src/app/interfaces/RespApi';

@Component({
  selector: 'app-modal-del-servicio',
  templateUrl: './modal-del-servicio.component.html',
  styleUrls: ['./modal-del-servicio.component.css']
})
export class ModalDelServicioComponent implements OnInit {

  UserSite_selected= ""
  Severities_selected= ""
  UsersSite! : ChicoServicio[];
  Severities!: Severity[];
  DataService!: AssignInterface

  constructor(
    private socketWebService: SocketWebService,
    private ServicesByStatusService: ServicesByStatusService,
    public dialogRef: MatDialogRef<ModalDelServicioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Service) { }

  ngOnInit(): void {

    this.cargarUsersSite();
    this.cargarSeverities();
  console.log(this.data);
  }



  AsignarServicio(servicio:Service, Severities_selected: string , UserSite_selected:any ){

     this.DataService= {

       from: localStorage.getItem("IdAdmin") || '',
       to: UserSite_selected,
       service: servicio,
       severity: Severities_selected,
       depto: servicio.report.department.user

     };

     console.log(this.DataService);
     this.socketWebService.asignarServicio(this.DataService);
     window.location.reload();


  }


  cargarUsersSite(){

    this.ServicesByStatusService.Get_ActiveUsersAPI().subscribe(
      resp=>{
        this.UsersSite= resp.users;
      }
    )

  }


  cargarSeverities(){

    this.ServicesByStatusService.Get_SeveritiesAPI().subscribe(
      resp=>{
        this.Severities= resp.severities;
      }
    )

  }

}

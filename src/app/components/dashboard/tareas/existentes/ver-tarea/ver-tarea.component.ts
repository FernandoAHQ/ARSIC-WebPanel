import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { AllUsersTableService } from 'src/app/services/all-users-table.service';
import { RegistraUsuarioService } from 'src/app/services/registra-usuario.service';
import { ServicesByStatusService } from 'src/app/services/services-by-status.service';
import { SocketWebService } from 'src/app/services/socket-web.service';
import { environment } from 'src/environments/environment';
import { GradeInterface, Tarea } from '../../../../../interfaces/Interfaces';
import { ChicoServicio, Service } from '../../../../../interfaces/RespApi';

@Component({
  selector: 'app-ver-tarea',
  templateUrl: './ver-tarea.component.html',
  styleUrls: ['./ver-tarea.component.css']
})
export class VerTareaComponent implements OnInit {

  grade!: GradeInterface;
  UsersSite! : ChicoServicio[];
  horas: number[] = [];
  selected_user!: string;
  selected_time!: number;
  url!: string;

  constructor(
    private usersService: AllUsersTableService,
    private socketWebService: SocketWebService,
    private router: Router,
    private registraUsuarioService : RegistraUsuarioService,
    private servicesByStatusService: ServicesByStatusService,
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Tarea  ) {



  }



  ngOnInit(): void {
    this.url = environment.baseURL + "/api/images/users/"


    this.cargarUsersSite();
    this.data.asignments.sort((a, b)=>a.time -b.time)

    for(let i = 7; i < 22; i++) this.horas.push(i);
    //users.forEach((p)=>console.log(p.image));

  }

  cargarUsersSite(){

    this.servicesByStatusService.Get_ActiveUsersAPI().subscribe(
      resp=>{
        this.UsersSite= resp.users.filter((user)=>{
          let exists = false;
          this.data.asignments.forEach((assignment)=>{
            if(user._id == assignment.assignedTo._id) exists = true;
          })
          return !exists;
        })
        console.log(this.UsersSite)
        console.log(this.data.asignments)

      }

    )


  }

  assign(user: string, time: number){

    if(this.selected_time!= null || this.selected_time!=null){
//send to server
this.servicesByStatusService.asignarTarea(this.data._id, user, time).subscribe(
  resp=>{
    if(resp.status == true){
      this.UsersSite.forEach((x)=>{
            if(x._id == user)
            this.data.asignments.push({
              assignedTo: {
                _id: x._id,
                image: (this.url + x.image),
                isActive: x.isActive,
                name: x.name,
                username: x.username,
                online: "true",
              },
              time: time
            })
        })
    }
    this.cargarUsersSite();
    this.data.asignments.sort((a, b)=>a.time -b.time)
    this.horas = this.horas
  }


)




    }



 }

 close(){
  window.location.reload();

 }



}

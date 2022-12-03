import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Department, Motherboard, OperatingSystem, Processor, RAM, RespDepartment } from 'src/app/interfaces/InterfaceAllDepartment';
import { ServicesByStatusService } from '../../../../../services/services-by-status.service';
import { Router } from '@angular/router';

interface Status {
  value: string;
}

@Component({
  selector: 'app-registrar-computadora',
  templateUrl: './registrar-computadora.component.html',
  styleUrls: ['./registrar-computadora.component.css']
})
export class RegistrarComputadoraComponent implements OnInit {

  RegisForm: FormGroup;
  Deparments!: Department[];
  osList!: OperatingSystem[];
  processorList!: Processor[];
  motherboardList!: Motherboard[];
  ramList!: RAM[];


  StatusAll: Status[] = [
    {value: 'Activo'},
    {value: 'Inactivo'},
    {value: 'Requisición'},
  ];

  DeparmentSelected: string  = "";
  StatusSelected:    string  = "";
  osSelected: string  = "";
  processorSelected:    string  = "";
  ramSelected: string  = "";
  storageTypeSelected: string  = "";
  storageCapacitySelected: string  = "";
  motherboardSelected: string = "";

  constructor(
    private fb:FormBuilder,
    private _snackBar: MatSnackBar,
    private Router:Router,
    private ServicesByStatusService: ServicesByStatusService,

  ) {
    this.RegisForm =  this.fb.group({
      Departamento: ['',Validators.required],
      Folio: ['',Validators.required],
      Status:['',Validators.required],
      OS:['',Validators.required],
      Processor:['',Validators.required],
      Motherboard:['',Validators.required],
      RAM:['',Validators.required],
      StorageType:['',Validators.required],
      StorageCapacity:['',Validators.required],
    })
  }



  ngOnInit(): void {
    this.getDepartments()
    this.getSpecs()
  }


  getDepartments(){

    this.ServicesByStatusService.Get_Departments().subscribe(
      resp=>{
        this.Deparments = resp.departments;
      }
    )

  }

  getSpecs(){
    this.ServicesByStatusService.getSpecs().subscribe(
      resp=>{
        this.osList = resp.systems;
        this.processorList = resp.processors;
        this.motherboardList = resp.motherboards;
        this.ramList = resp.rams;
      })
  }

  registrarPC(){

    const deparment = this.RegisForm.value.Departamento
    const folio = this.RegisForm.value.Folio
    const status = this.RegisForm.value.Status
    const os = this.RegisForm.value.OS
    const processor = this.RegisForm.value.Processor
    const board = this.RegisForm.value.Motherboard
    const ram = this.RegisForm.value.RAM
    const storageType = this.RegisForm.value.StorageType
    const storageCapacity = this.RegisForm.value.StorageCapacity


//    os, processor, ram, motherboard, type, capacity
    this.ServicesByStatusService.PostRegistrarPC(deparment, folio, status,
      os, processor, ram, board, storageType, storageCapacity).subscribe(
      resp=>{
        if(resp.status){
          this.MensajeUsuarioOk(folio)
        }
        else{

          this.error("VERIFICA LOS CAMPOS O CONTACTA AL ADMIN")

        }
      }
    )


  }


  MensajeUsuarioOk(MSG : string){

    const mensaje = "¡La computadora "+ `${MSG}` + " se creó exitosamente!"

    this._snackBar.open(mensaje,'',{

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })

    location.reload();
  }

  error(mensaje : string){

    this._snackBar.open(mensaje,'',{

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })

  }

}

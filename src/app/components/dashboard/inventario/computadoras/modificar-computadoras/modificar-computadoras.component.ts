import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Department, Motherboard, OperatingSystem, Processor, RAM, RespDepartment } from 'src/app/interfaces/InterfaceAllDepartment';
import { ServicesByStatusService } from '../../../../../services/services-by-status.service';
import { Router } from '@angular/router';
import { Computer } from 'src/app/interfaces/RespApi';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThisReceiver } from '@angular/compiler';

interface Status {
  value: string;
}

@Component({
  selector: 'app-modificar-computadoras',
  templateUrl: './modificar-computadoras.component.html',
  styleUrls: ['./modificar-computadoras.component.css']
})
export class ModificarComputadorasComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private _snackBar: MatSnackBar,
    private Router:Router,
    private ServicesByStatusService:ServicesByStatusService,
    public dialogRef: MatDialogRef<ModificarComputadorasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Computer
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
    storageTypeSelected: String  = "";
    storageCapacitySelected: String  = "";
    motherboardSelected: string = "";



  ngOnInit(): void {
    this.getDepartments()
    this.getSpecs()
    this.storageTypeSelected = this.data.specs.storage.type
    console.log('storage: '+ this.storageTypeSelected);
    this.RegisForm.setValue({
      Departamento: this.data.department._id,
      Folio: this.data.folio,
      Status: this.data.status,
      OS: this.data.specs.os,
      Processor: this.data.specs.processor,
      Motherboard: this.data.specs.motherboard,
      RAM: this.data.specs.ram,
      StorageType: this.data.specs.storage.type,
      StorageCapacity: this.data.specs.storage.capacity,
    })

  }


  getDepartments(){

    this.ServicesByStatusService.Get_Departments().subscribe(
      resp=>{
        this.Deparments = resp.departments;
        console.log(this.Deparments);
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



  actualizarPC(){
    const id= this.data._id
    const deparment = this.RegisForm.value.Departamento
    const folio = this.RegisForm.value.Folio
    const status = this.RegisForm.value.Status
    const os = this.RegisForm.value.OS
    const processor = this.RegisForm.value.Processor
    const board = this.RegisForm.value.Motherboard
    const ram = this.RegisForm.value.RAM
    const storageType = this.RegisForm.value.StorageType
    const storageCapacity = this.RegisForm.value.StorageCapacity

    console.log("===>" + id);

    this.ServicesByStatusService.ActualizarPC(id,deparment, folio, status,
      os, processor, ram, board, storageType, storageCapacity).subscribe(




    )


    location.reload();

  }


  MensajeUsuarioOk(MSG : string){

    const mensaje = "Se creó Actualizo la computadora "+ `${MSG}` + " !!!"

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

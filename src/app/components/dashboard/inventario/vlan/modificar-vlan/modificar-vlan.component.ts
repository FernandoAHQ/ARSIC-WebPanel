import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicesByStatusService } from '../../../../../services/services-by-status.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VLAN } from 'src/app/interfaces/RespApi';

@Component({
  selector: 'app-modificar-vlan',
  templateUrl: './modificar-vlan.component.html',
  styleUrls: ['./modificar-vlan.component.css']
})
export class ModificarVlanComponent implements OnInit {

  RegisForm: FormGroup;

  constructor(
    private fb:FormBuilder, 
    private _snackBar: MatSnackBar,
    private Router:Router,
    private ServicesByStatusService: ServicesByStatusService,
    public dialogRef: MatDialogRef<ModificarVlanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VLAN
    ) {
      this.RegisForm =  this.fb.group({
        vlan: [this.data.vlan,Validators.required],
        name: [this.data.name,Validators.required],
        ip:[this.data.ip,Validators.required],
        mask:[this.data.mask,Validators.required],
        gateway:[this.data.gateway,Validators.required],
        broadcast:[this.data.broadcast,Validators.required],
        staticStart:[this.data.staticStart,Validators.required],
        staticEnd:[this.data.staticEnd,Validators.required],
        dynamicStart:[this.data.dynamicStart,Validators.required],
        dynamicEnd:[this.data.dynamicEnd,Validators.required],
      })

     }

  ngOnInit(): void {
  }

  actualizarVLAN(){
    const vlan = this.RegisForm.value.vlan
    const name = this.RegisForm.value.name
    const ip = this.RegisForm.value.ip
    const mask = this.RegisForm.value.mask
    const gateway = this.RegisForm.value.gateway
    const broadcast = this.RegisForm.value.broadcast
    const staticStart = this.RegisForm.value.staticStart
    const staticEnd = this.RegisForm.value.staticEnd
    const dynamicStart = this.RegisForm.value.dynamicStart
    const dynamicEnd = this.RegisForm.value.dynamicEnd

    const id= this.data._id

    const body = {vlan, name, ip, mask, gateway, broadcast, staticStart, staticEnd, dynamicStart, dynamicEnd, id}

    this.ServicesByStatusService.actualizatVLAN(body).subscribe(
      resp=>{
        if(resp.status){
          this.MensajeUsuarioOk(resp.message)
          location.reload();
        }
        else{
          this.MensajeUsuarioOk(resp.message)
        }
      }
    )

  }

  MensajeUsuarioOk(MSG : string){
    
    this._snackBar.open(MSG,'',{

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })

    location.reload(); 
  }

}

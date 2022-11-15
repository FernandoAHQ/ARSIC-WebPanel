import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicesByStatusService } from '../../../../../services/services-by-status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-vlan',
  templateUrl: './registrar-vlan.component.html',
  styleUrls: ['./registrar-vlan.component.css']
})
export class RegistrarVlanComponent implements OnInit {

  RegisForm: FormGroup;

  constructor(
    private fb:FormBuilder, 
    private _snackBar: MatSnackBar,
    private Router:Router,
    private ServicesByStatusService: ServicesByStatusService,
    ) {
      this.RegisForm =  this.fb.group({
        vlan: ['',Validators.required],
        name: ['',Validators.required],
        ip:['',Validators.required],
        mask:['',Validators.required],
        gateway:['',Validators.required],
        broadcast:['',Validators.required],
        staticStart:['',Validators.required],
        staticEnd:['',Validators.required],
        dynamicStart:['',Validators.required],
        dynamicEnd:['',Validators.required],
      })

     }

  ngOnInit(): void {
  }



  registrarVLAN(){

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

    const body = {vlan, name, ip, mask, gateway, broadcast, staticStart, staticEnd, dynamicStart, dynamicEnd}

    console.log(body);

    this.ServicesByStatusService.PostRegistrarVLAN(body).subscribe(
      resp=>{

        if(resp.status){
          this.MensajeUsuarioOk(resp.message)
        }

        else{
          this.error(resp.message)
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

    this.Router.navigateByUrl("/dashboard/inventario/vlans")
  }

  error(mensaje : string){

    this._snackBar.open(mensaje,'',{

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })

  }

}

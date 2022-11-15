import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataUsers } from 'src/app/interfaces/InterfaceAllUser';
import { RegistraUsuarioService } from '../../../../services/registra-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-edit-user',
  templateUrl: './modal-edit-user.component.html',
  styleUrls: ['./modal-edit-user.component.css']
})
export class ModalEditUserComponent implements OnInit {

  RegisForm: FormGroup;

  constructor(
    private router: Router,
    private registraUsuarioService : RegistraUsuarioService,
    private fb:FormBuilder, 
    public dialogRef: MatDialogRef<ModalEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataUsers

  ) { 


    this.RegisForm =  this.fb.group({
      name: [this.data.name,Validators.required],
      user: [this.data.username,Validators.required]

    })
  }

  ngOnInit(): void {
  }

  actualizar(){
    const name = this.RegisForm.value.name
    const user = this.RegisForm.value.user 

    console.log(`${name}, ${user}`);
    this.registraUsuarioService.editar(this.data._id, name, user).subscribe( resp =>{
      if(resp){

        this.router.navigateByUrl("/dashboard/usuarios")
        
      } else{

        console.log("Ocurrio un Error")
      }
      
    })

    console.log(`Deberia estar editado xd --> ${name}`);
  }
  

}

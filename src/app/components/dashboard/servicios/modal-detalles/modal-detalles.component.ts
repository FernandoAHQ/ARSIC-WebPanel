
  import { Component, Inject, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
  import { Router } from '@angular/router';
  import { RegistraUsuarioService } from 'src/app/services/registra-usuario.service';
  import { SocketWebService } from 'src/app/services/socket-web.service';
  import { GradeInterface } from '../../../../interfaces/Interfaces';
  import { Service } from '../../../../interfaces/RespApi';

  @Component({
    selector: 'app-modal-detalles',
    templateUrl: './modal-detalles.component.html',
    styleUrls: ['./modal-detalles.component.css']
  })
export class ModalDetallesComponent implements OnInit {

    grade!: GradeInterface;
    RegisForm: FormGroup;

    constructor(
      private socketWebService: SocketWebService,
      private router: Router,
      private registraUsuarioService : RegistraUsuarioService,
      private fb:FormBuilder,
      public dialogRef: MatDialogRef<ModalDetallesComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Service
    ) {


      this.RegisForm =  this.fb.group({
        calidad: Validators.required,
        dificultad: Validators.required
      })

    }



    ngOnInit(): void {
    }


    calificarServicio(){

      const dificulty = this.RegisForm.value.dificultad
      const quality = this.RegisForm.value.calidad

      this.grade= {

        //from: localStorage.getItem("IdAdmin") || '',
      //  to: UserSite_selected,



        dificulty,
        quality
      };

      console.log(this.grade);
      this.socketWebService.calificarServicio(this.grade, this.data._id);

      window.location.reload();

   }


   formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  }

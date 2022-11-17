import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocketWebService } from 'src/app/services/socket-web.service';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {

  RegisForm: FormGroup;
  selected : string =  'Telefono';
  constructor(
    private socket: SocketWebService,
    private router: Router,
    private fb: FormBuilder) {


    this.RegisForm =  this.fb.group({
      title: ['',Validators.required],
      description: ['',Validators.required]

    })

   }

  ngOnInit(): void {
  }



  enviar(){


        const title =       this.RegisForm.value.title
        const description = this.RegisForm.value.description

        const body ={

          from: localStorage.getItem('IdAdmin'),
          report:{
              title,
              description,
              category: this.selected
           }

        }


        console.log(body);



        this.socket.enviarServicio(body)


  }


}

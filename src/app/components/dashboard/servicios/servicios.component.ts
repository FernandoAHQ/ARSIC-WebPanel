import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/admin-role/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(
    public serviciosServices : ServiciosService,
    private router:Router) { }

  ngOnInit(): void {
  }


  goTo(name: string){

    //this.router.navigateByUrl(`dashboard/servicios/${name}`)

    this.router.navigate(["dashboard","servicios", name])

  }


}

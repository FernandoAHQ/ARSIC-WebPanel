import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }
  name: string = "";
  role: string = "";
  ngOnInit(): void {
    this.role = localStorage.getItem('role')!;
    console.log(this.role)
  }

}

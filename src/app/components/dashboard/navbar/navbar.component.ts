import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../../../interfaces/Interfaces';
import { SocketWebService } from '../../../services/socket-web.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu?: Menu []  ;

  constructor(private router: Router, 
    private SocketWebService: SocketWebService  ) { }

  ngOnInit(): void {

    this.menu= JSON.parse(localStorage.getItem('menu') || "")


  }

  
  logout(){

    this.SocketWebService.disconnect()
    localStorage.clear();
    this.router.navigateByUrl("/login")

  }



}

import { Component, OnInit } from '@angular/core';
import { SocketWebService } from '../../services/socket-web.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private SocketWebService : SocketWebService) { }

  ngOnInit(): void {

    this.SocketWebService.escucharService()
  }

}

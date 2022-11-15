import { Component, OnInit } from '@angular/core';
import { SocketWebService } from './services/socket-web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ITCSIOS';
  constructor (){}

  list:string[] = [];

  ngOnInit(): void {
    for(let i = 1; i <=10; i++) {this.list.push(i + '')
    }
  }
}

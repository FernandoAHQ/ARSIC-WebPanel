import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ranked-card',
  templateUrl: './ranked-card.component.html',
  styleUrls: ['./ranked-card.component.css']
})
export class RankedCardComponent implements OnInit {

  constructor() { }

  @Input() name?:string;
  @Input() img?:string;
  @Input() points?:string;
  @Input() rank?:number;

  ngOnInit(): void {

  }

}

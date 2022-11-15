import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { taskLog } from 'src/app/interfaces/Interfaces';

@Component({
  selector: 'app-ver-bitacora',
  templateUrl: './ver-bitacora.component.html',
  styleUrls: ['./ver-bitacora.component.css']
})
export class VerBitacoraComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: taskLog) {

  }

  ngOnInit(): void {
  }

}

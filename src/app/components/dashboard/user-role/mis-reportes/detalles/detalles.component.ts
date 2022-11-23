import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Service } from 'src/app/interfaces/RespApi';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesReporteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetallesReporteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Service
  ) { }

  ngOnInit(): void {
  }

}

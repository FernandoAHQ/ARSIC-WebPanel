import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bitacora } from '../../../../interfaces/Interfaces';

@Component({
  selector: 'app-ver-bitacora',
  templateUrl: './ver-bitacora.component.html',
  styleUrls: ['./ver-bitacora.component.css']
})
export class VerBitacoraComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<VerBitacoraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Bitacora) { }

  ngOnInit(): void {
  }

}

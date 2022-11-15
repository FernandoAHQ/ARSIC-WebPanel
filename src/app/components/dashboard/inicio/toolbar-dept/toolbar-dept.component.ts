import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewReportComponent } from '../../user-role/new-report/new-report.component';

@Component({
  selector: 'app-toolbar-dept',
  templateUrl: './toolbar-dept.component.html',
  styleUrls: ['./toolbar-dept.component.css']
})
export class ToolbarDeptComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }
  dept:string = "";

  ngOnInit(): void {
    this.dept = localStorage.getItem('dept')!;

  }


  newReport(){

    this.dialog.open(NewReportComponent, {height: '600px', width: '450px'})

    console.log('xd');

  }

}

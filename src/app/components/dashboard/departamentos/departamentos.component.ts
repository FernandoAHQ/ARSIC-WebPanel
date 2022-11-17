import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AllDepartmentsService } from '../../../services/all-departments.service';
import { Department } from '../../../interfaces/InterfaceAllDepartment';
import { MatTableDataSource } from '@angular/material/table'
import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private AllDepartmentsService: AllDepartmentsService
    ) { }

  ngOnInit(): void {
    this._getAllDepartaments();
  }

  get _Departments(){

    return this.AllDepartmentsService.DataTable

  }

  ELEMENT_DATA_TABLE: Department[] = this._Departments;
  displayedColumns: string[] = ['Nombre', 'Usuario', 'Ubicacion'];
  dataSource = new  MatTableDataSource <Department>(this.ELEMENT_DATA_TABLE);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  _getAllDepartaments(){
    this.AllDepartmentsService.AllDepartments_API().subscribe(

      resp=> this.dataSource.data = resp.departments as Department[]

    )
  }
}

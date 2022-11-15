import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {

  parts: FormGroup;

  constructor(fb: FormBuilder) {
    this.parts = fb.group({
      'area': '',
      'exchange': '',
      'subscriber': ''
    });

   }

  ngOnInit(): void {
  }


}

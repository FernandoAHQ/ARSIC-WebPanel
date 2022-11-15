import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTES ANGULAR
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginadorComponent } from '../dashboard/paginador/paginador.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { StarRatingModule } from 'angular-star-rating';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [PaginadorComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatSelectModule,
    MatChipsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    StarRatingModule,
    MatSliderModule
    
  ],
  exports:[
    
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatSelectModule,
    MatChipsModule,
    MatPaginatorModule,
    PaginadorComponent,
    MatDialogModule,
    MatDatepickerModule,
    StarRatingModule,
    MatSliderModule
    

  ]
})
export class CompartidoModule { }

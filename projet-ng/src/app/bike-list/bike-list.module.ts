import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BikeListRoutingModule } from './bike-list-routing.module';

import { BikeListComponent } from './bike-list.component';
import { BikeListDetailComponent } from './bike-list-detail/bike-list-detail.component';

import { BikesDataService } from '../services/bikes-data.service';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    BikeListComponent,
    BikeListDetailComponent,
  ],
  imports: [
    CommonModule,
    BikeListRoutingModule,

    HttpClientModule,

    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],

  providers: [
    BikesDataService
  ],
})
export class BikeListModule { }

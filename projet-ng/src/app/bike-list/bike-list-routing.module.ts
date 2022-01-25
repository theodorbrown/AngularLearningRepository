import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeListDetailComponent } from './bike-list-detail/bike-list-detail.component';
import { BikeListComponent } from './bike-list.component';

const routes: Routes = [
  {path: '', component: BikeListComponent},
  {path: 'details', component: BikeListDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikeListRoutingModule { }

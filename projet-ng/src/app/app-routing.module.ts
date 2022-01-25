import { ProfilComponent } from './compte/profil/profil.component';
import { LoginComponent } from './compte/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './compte/register/register.component';
import { GalerieComponent } from './galerie/galerie.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'galerie', component: GalerieComponent},
  {path: 'bikeslist', loadChildren: () => import('./bike-list/bike-list.module').then(m=>m.BikeListModule)},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profil', component: ProfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GalerieComponent } from './galerie/galerie.component';
import { RegisterComponent } from './compte/register/register.component';

import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



import { ReactiveFormsModule } from '@angular/forms';
import { ProfilComponent } from './compte/profil/profil.component';
import { LoginComponent } from './compte/login/login.component';
import { TelFormatPipe } from './pipes/tel-format.pipe';
import { SharedBtnComponent } from './shared/components/shared-btn/shared-btn.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GalerieComponent,
    RegisterComponent,
    ProfilComponent,
    LoginComponent,
    TelFormatPipe,
    SharedBtnComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,

    MatCarouselModule.forRoot(),

    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,

    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

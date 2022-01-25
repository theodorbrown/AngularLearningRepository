import { LocalStorageService } from './../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isConnected = false

  constructor(private ls: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    if(this.ls.checkIfConnected()) {
      this.isConnected = true;
    } else {
      this.router.navigate(['/']);
    }
    
  }

  logOutUser(){
    this.ls.logOutUser();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

}

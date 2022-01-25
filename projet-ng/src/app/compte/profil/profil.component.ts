import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user: any = undefined;

  constructor(private ls: LocalStorageService) { }

  ngOnInit(): void {
    this.user = this.ls.getUser()
    console.log(this.user)
  }

}

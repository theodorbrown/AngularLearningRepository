import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface BikeModel {
  id:        number;
  nom:       string;
  taille:    string;
  ref:       string;
  type:      string;
  materiaux: string;
  poids:     string;
  img:       string;
}

@Component({
  selector: 'app-bike-list-detail',
  templateUrl: './bike-list-detail.component.html',
  styleUrls: ['./bike-list-detail.component.css']
})
export class BikeListDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: BikeModel) { }

  ngOnInit(): void {
  }

}

import { BikesDataService } from './../services/bikes-data.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BikeListDetailComponent } from './bike-list-detail/bike-list-detail.component';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  data: any;

  constructor(private bs: BikesDataService, public dialog: MatDialog) { }

  ngOnInit(): void {
      this.bs.getListBikes().subscribe({
        next: data => {
          this.data = data;
        },
        error: mess => {
          console.log(mess);
        }
      })
    }

    openCompDetails(bike: any){
      const dialogRef = this.dialog.open(BikeListDetailComponent, {
        data: {
          id: bike.id,
          nom: bike.nom,
          taille: bike.taille,
          ref: bike.ref,
          type: bike.type,
          poids: bike.poids,
          materiaux: bike.materiaux
        },
      });
    }
  }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  public slidesList = [
    "https://www.destination-paysbigouden.com/sites/paysbigouden/files/styles/contenu_slider/public/content/images/1523019970-1516343429.jpg?itok=z_6eFU73",
    "https://www.flyer-bikes.com/fileadmin/_processed_/3/5/csm_FLYER_E-Bikes_Fahrtechniktraining_5a4146c9ad.jpg",
    "https://www.holidays-iledere.co.uk/sites/iledere/files/styles/contenu_slider/public/content/images/1508763494-1407069898.jpg?itok=WW1gttoM",
    "https://www.n-py.com/sites/n-py/files/commons/2019-2020/Ete/Stations/Cauterets/Activites/cauteret%20BikePark/cauterets-bikePark-cover.jpg",
    "https://www.languedoc-visit.com/sites/haut-languedoc-vignobles/files/styles/contenu_slider/public/content/images5db079bde99d3/vttiste_chemin_en_terre.jpg?itok=Ry5EGPSg"

  ]

  public slides = this.slidesList.length;

  constructor() {}

  ngOnInit(): void {
    
  }
}
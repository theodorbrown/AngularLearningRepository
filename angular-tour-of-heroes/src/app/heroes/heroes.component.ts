import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private hs: HeroService) { }

  heroes: Hero[] = [];
  selectedHero?: Hero;


  ngOnInit(): void {
    this.getHeroes();
  }

  /*onSelect(hero: Hero){
    this.selectedHero = hero;
    this.ms.addMessage(`HeroesComponent: Selected hero id=${hero.id}`);
  }*/

  getHeroes(): void{
    this.hs.getHeroes()
    .subscribe(h => this.heroes = h);
  }

}

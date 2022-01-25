import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private ms: MessageService) { }


  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.ms.addMessage('HeroService : Heroes have been fetched !');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.ms.addMessage(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

}

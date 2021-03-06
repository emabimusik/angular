import { Component, OnInit } from '@angular/core';
import {HeroService } from '../hero.service';
import {Hero} from '../heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  owner = 'Emanuel';
 
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
   
  //heroes = Heroes
  constructor(private heroService: HeroService) {

   }

   getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes =>this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes()
  }

}

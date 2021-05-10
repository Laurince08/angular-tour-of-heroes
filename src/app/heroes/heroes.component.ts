import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  searchHero
  
  hero: Hero = {
    id: 11,
    name: "Iron Man"
  }

  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  addHero(hero: Hero): void{
    this.heroes.push(hero);
  }




  constructor() { }

  ngOnInit(): void { 
  }

}

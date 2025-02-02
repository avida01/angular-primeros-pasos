import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list-heroes.component.html',
  styleUrl: './list-heroes.component.css'
})
export class ListHeroesComponent {
  public heroNames: string[] = ['Superman', 'Ironman', 'Spiderman', 'Thor'];

  public deletedHero?: string;

  removeLastHero(): void{
   this.deletedHero =  this.heroNames.pop();
  }
}

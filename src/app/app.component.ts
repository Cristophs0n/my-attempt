import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  template: `
    <h1>{{title}}</h1>

    <div id="heroesList">
      <ul class="heroes">
        <li *ngFor="let hero of HEROES" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
    </div>

    <hr />

    <div id="heroDetails" *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details</h2>
      <p><label class="strong">ID:</label> {{selectedHero.id}}</p>
      <p><label class="strong">Hero:</label> {{selectedHero.name}}</p>
      <input [(ngModel)]="selectedHero.name">
    </div>
  `,
})

export class AppComponent  { 
  
  title = "Tour of Heroes 2"; 
  selectedHero: Hero;
  
  HEROES = [
  {id: 11, name: 'Windstorm'},
  {id: 12, name: 'Spiderman'},
  {id: 13, name: 'Superman'},
  {id: 14, name: 'Batman'},
  {id: 15, name: 'Wonder Woman'},
  {id: 16, name: 'Hulk'},
  {id: 17, name: 'Cristophs0n'},
  {id: 18, name: 'Catherine'},
  {id: 19, name: 'Rosie'}
  ]

  onSelect(hero: Hero) : void {
      this.selectedHero = hero;
  }

}

  

export class Hero {
  id: number;
  name: string;
}


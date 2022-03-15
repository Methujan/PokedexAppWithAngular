import { Component, OnInit } from '@angular/core';
import { PokedexListComponent } from './components/pokedex-list/pokedex-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PokedexListComponent]
},
)
export class AppComponent implements OnInit {
  poke: any;
  url= 'https://pokeapi.co/api/v2/pokemon/'
  constructor(private srv: PokedexListComponent){}
  getPoke():void{
    this.srv.getAllPokemonData(this.url).subscribe(data=>{
      this.poke=data
      console.log(this.poke)
    })
  }
  getEachPoke(pokemon:any):void{
    let url = pokemon.url
  }
  ngOnInit(): void {
    console.log(this.getPoke())
      this.getPoke()
  }
}

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
  pokemons : any[] = [];
  poke: any;
  url= 'https://pokeapi.co/api/v2/pokemon/'
  constructor(private srv: PokedexListComponent){}
  getPoke():void{
    this.srv.getData(this.url).subscribe((data:any)=>{
      this.poke=data
      data.results.forEach((pokemon:any) => {
        // console.log(pokemon)
        this.getEachPoke(pokemon)
      });
      console.log('this.poke', this.poke)
      console.log('this.poke.results', this.poke.results)
      console.log('pokemons', this.pokemons)
    })
  }
  getEachPoke(pokemon:any):void{
    let url = pokemon.url
    this.srv.getData(url).subscribe((pokemonData:any)=>{
      // console.log(pokemonData)
      this.pokemons.push(pokemonData)
    })
  }
  ngOnInit(): void {
    console.log(this.getPoke())
      this.getPoke()
  }
}

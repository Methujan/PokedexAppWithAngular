import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-pokedex-search',
  templateUrl: './pokedex-search.component.html',
  styleUrls: ['./pokedex-search.component.css']
})
export class PokedexSearchComponent implements OnInit {

  constructor(private http:HttpClient) { }

  dialog = false
  name: string = "";
  pokemonData:any={};
 

  getPokemonWithName(){
    let url=`https://pokeapi.co/api/v2/pokemon/${this.name}`
    this.getData(url).subscribe((data:any)=>{
      console.log('tyoooy',data)
      console.log(url)
      console.log(this.name)
      this.dialog = true;
      this.pokemonData = data
    })
  }
  
  ngOnInit(): void {
  }

  getData(url:string){
    console.log(url)
    return this.http.get(url)


  }
  closeDetails(val:boolean){
    this.dialog = val;
  }
}

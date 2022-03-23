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
  url=`https://pokeapi.co/api/v2/pokemon/${this.name}`

  getPokemonWithName(){
    this.getData(this.url).subscribe((data:any)=>{
      console.log('tyoooy',data.results)
      console.log(this.url)
      
      this.dialog = true;
    })
  }
  
  ngOnInit(): void {
  }

getData(url:string){
    return this.http.get(url)

}}

import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';


@Component({
  selector: 'app-pokedex-search',
  templateUrl: './pokedex-search.component.html',
  styleUrls: ['./pokedex-search.component.css']
})
export class PokedexSearchComponent implements OnInit {

  constructor(private http:HttpClient) { }

  dialog = false
  name: string = "mew";
  url=`https://pokeapi.co/api/v2/pokemon/${this.name}`

  getPokemonWithName(){
    this.getData(this.url).subscribe((data:any)=>{
      console.log('tyoooy',data)
      console.log(this.url)
      console.log(this.name)
      
      this.dialog = true;
    })
  }
  
  ngOnInit(): void {
  }

getData(url:string){
  console.log(url)
    return this.http.get(url)

}}

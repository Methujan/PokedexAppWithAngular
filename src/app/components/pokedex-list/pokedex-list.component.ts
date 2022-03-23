import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css']
})
export class PokedexListComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  getData(url:string){
    return this.http.get(url)

}}

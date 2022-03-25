import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.css']
})
export class PokedexCardComponent implements OnInit {
  @Input() card:any;
  @Output() close = new EventEmitter<boolean>();

  closeDetails() {
    this.close.emit(false)
  }
  constructor() { }

  ngOnInit(): void {
  }
}

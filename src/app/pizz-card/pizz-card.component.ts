import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-pizz-card',
  templateUrl: './pizz-card.component.html',
  styleUrls: ['./pizz-card.component.scss']
})
export class PizzCardComponent implements OnInit {

  @Input() pizza!: Pizza;
  
  constructor() { }

  ngOnInit(): void {
  }

}

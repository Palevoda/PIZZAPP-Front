import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.scss']
})
export class PizzasListComponent implements OnInit {

  constructor() { }

  pizzas : Pizza[] = [];

  ngOnInit(): void {
    this.pizzas.push(new Pizza("Margaritta", 12.99, "./assets/images/pizza.jpg"));
    this.pizzas.push(new Pizza("Margaritta", 11.99, "./assets/images/pizza.jpg"));
    this.pizzas.push(new Pizza("Margaritta", 7.99,  "./assets/images/pizza.jpg"));
    this.pizzas.push(new Pizza("Margaritta", 10.55, "./assets/images/pizza.jpg"));
    this.pizzas.push(new Pizza("Margaritta", 15.40, "./assets/images/pizza.jpg"));
    this.pizzas.push(new Pizza("Margaritta", 10.99, "./assets/images/pizza.jpg"));
    this.pizzas.push(new Pizza("Margaritta", 12.99, "./assets/images/pizza.jpg"));
    this.pizzas.push(new Pizza("Margaritta", 11.99, "./assets/images/pizza.jpg"));
    this.pizzas.push(new Pizza("Margaritta", 7.99, "./assets/images/pizza.jpg"));
    this.pizzas.push(new Pizza("Margaritta", 10.55, "./assets/images/pizza.jpg"));
    this.pizzas.push(new Pizza("Margaritta", 15.40, "./assets/images/pizza.jpg"));
    this.pizzas.push(new Pizza("Margaritta", 10.99, "./assets/images/pizza.jpg"));

  }

}

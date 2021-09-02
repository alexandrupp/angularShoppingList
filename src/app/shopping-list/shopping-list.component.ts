import { Component, OnInit } from '@angular/core';

import { Ingredient } from "../shared/ingredient.model"

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Mozarella", 5),
    new Ingredient("Tomatoes", 10)
  ];

  addIngredientToList(ingredient:Ingredient){
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount))
  }

  constructor() { }

  ngOnInit(): void {
  }

}

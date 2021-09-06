import { Component } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model"
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  providers:[ShoppingListService]
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [
    new Ingredient("Mozarella", 5),
    new Ingredient("Tomatoes", 10)
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}

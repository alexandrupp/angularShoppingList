import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayRecipes = false;

  showRecipes(data: {recipes: boolean, shoppingList: boolean}) {
    if (data.recipes === true && data.shoppingList === false)
      this.displayRecipes = true;
  }
  showShoppingList(data: {recipes: boolean, shoppingList: boolean}) {
    if (data.recipes === false && data.shoppingList === true)
      this.displayRecipes = false;
  }
}

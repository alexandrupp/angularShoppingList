import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayRecipes = false;

  displayComponent(component: {recipes: boolean, shoppingList: boolean}) {
    if (component.recipes === true && component.shoppingList === false)
      this.displayRecipes = true;
    else if (component.recipes === false && component.shoppingList === true)
      this.displayRecipes = false;
  }
}

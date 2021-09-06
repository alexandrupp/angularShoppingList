import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Vegan Thai Rice Salad",
      `Fill a pot with salted water and bring it to the boil. Add rice and cook according to package instructions, then drain and let it cool down completely.
          Meanwhile, prep the veggies and make the dressing. 
          Add all dressing ingredients into a mason jar. Place the lid on and shake vigorously to combine.
          In a large bowl add the cooked rice, purple cabbage, cucumbers, kale, bell peppers, green onions, and cashew.
          Add the dressing just before serving, and toss to combine.`,
      "https://www.blondelish.com/wp-content/uploads/2018/12/Vegan-Thai-Rice-Salad-Recipe-5.jpg",
      [
        new Ingredient("Rice", 1),
        new Ingredient("Purple Cabbage", 1),
        new Ingredient("Cucumber", 4),
        new Ingredient("Kale", 3),
        new Ingredient("Bell Pepper", 1),
        new Ingredient("Green Onion", 6),
        new Ingredient("Cashew", 20),
      ]
    ),
    new Recipe(
      "Best Bruschetta Recipe You Can’t Be Without This Summer",
      `Preheat oven 450°F. Slice French bread into thin slices and bake about 10 minutes or until crispy. Remove from oven and rub garlic clove across top.
            In bowl, combine all remaining ingredients. When ready to serve, top toasted bread.`,
      "https://thehealthycookingblog.com/public/uploads/2017/08/best-bruschetta-recipe-tomato-bruschetta-recipe.png",
      [
        new Ingredient("Bread", 6),
        new Ingredient("Garlic", 3),
        new Ingredient("Tomatoes", 2),
        new Ingredient("Basil Leaves", 8),
        new Ingredient("Onion", 1),
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
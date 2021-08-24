import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe (
      "Vegan Thai Rice Salad",
      `Fill a pot with salted water and bring it to the boil. Add rice and cook according to package instructions, then drain and let it cool down completely.
      Meanwhile, prep the veggies and make the dressing. 
      Add all dressing ingredients into a mason jar. Place the lid on and shake vigorously to combine.
      In a large bowl add the cooked rice, purple cabbage, cucumbers, kale, bell peppers, green onions, and cashew.
      Add the dressing just before serving, and toss to combine.`,
      "https://www.blondelish.com/wp-content/uploads/2018/12/Vegan-Thai-Rice-Salad-Recipe-5.jpg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

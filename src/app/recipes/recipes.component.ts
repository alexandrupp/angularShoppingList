import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Input() clickedRecipe:Recipe = new Recipe("","","");

  onEmitRecipe(recipe:Recipe){
    this.clickedRecipe = recipe;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

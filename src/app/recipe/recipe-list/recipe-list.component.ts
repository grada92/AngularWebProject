import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]= [
    new Recipe('a test recipe', 'test2','https://media-assets.lacucinaitaliana.it/photos/6318b459e70ad59cdf9c9266/4:3/w_1000,h_750,c_limit/montanarine1.jpg'),
    new Recipe('a test recipe', 'test2','https://media-assets.lacucinaitaliana.it/photos/6318b459e70ad59cdf9c9266/4:3/w_1000,h_750,c_limit/montanarine1.jpg')

  ];

  constructor(){}

  ngOnInit(){}

  OnRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}

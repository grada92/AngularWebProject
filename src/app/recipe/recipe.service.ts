import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[]= [
    new Recipe('a test recipe', 'test2','https://media-assets.lacucinaitaliana.it/photos/6318b459e70ad59cdf9c9266/4:3/w_1000,h_750,c_limit/montanarine1.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20),
    ]),
    new Recipe('a test recipe2', 'test2','https://media-assets.lacucinaitaliana.it/photos/6318b459e70ad59cdf9c9266/4:3/w_1000,h_750,c_limit/montanarine1.jpg',[
      new Ingredient('Buns', 2)
    ])

  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

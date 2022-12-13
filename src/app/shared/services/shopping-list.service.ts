import { Injectable } from '@angular/core';

import { Ingredient } from '../ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }


  constructor() { }
}

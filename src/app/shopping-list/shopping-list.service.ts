import { Ingredients } from 'src/shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
   
    ingredientAdded = new EventEmitter<Ingredients[]>();
   
   
    private ingredients:Ingredients[]=[
        new Ingredients("Apples",5),
        new Ingredients("Tomatos",10),
        new Ingredients("Oranges",15)
    ]

    public addIngredient(ingredient:Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice());
    }

    public getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredients:Ingredients[]){
        this.ingredients.push(...ingredients);
        // this.ingredientAdded.emit(this.ingredients.slice());
    }
}
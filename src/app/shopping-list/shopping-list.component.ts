import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredients[];

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientAdded.subscribe(
      (ingredients:Ingredients[])=>{this.ingredients=ingredients}
    );
  }


}

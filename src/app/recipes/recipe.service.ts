import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from 'src/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
 
    public recipeSelected = new EventEmitter<Recipe>();
 
    private recipes:Recipe[]=[new Recipe("Recipe 1","this is a yummy recipe","https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg",[new Ingredients("chicken",5),new Ingredients("potatos",10)]),
                        new Recipe("Recipe 1","this is an awesome recipe","https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg",[new Ingredients("pork",5),new Ingredients("tomatos",10)]),
                        new Recipe("Recipe 1","MMMM yummy","https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/4101/f820f5da8808ff670e20/letterbox_ToffeeAppleCrumbleCheeseCake_103887.jpg",[new Ingredients("eggs",5),new Ingredients("beans",10)])]

    constructor(private shoppingListService:ShoppingListService){}


    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredients[]){
        this.shoppingListService.addIngredients(ingredients);
    }
 }
import { Ingredients } from 'src/shared/ingredients.model';

export class Recipe{
    public name:string;
    public description:string;
    public imageUrl:string;
    public ingredients:Ingredients[];


    constructor(name:string,desc:string,imageUrl:string,ingredients:Ingredients[]){
        this.name= name;
        this.description= desc;
        this.imageUrl=imageUrl;
        this.ingredients=ingredients;
    }
}
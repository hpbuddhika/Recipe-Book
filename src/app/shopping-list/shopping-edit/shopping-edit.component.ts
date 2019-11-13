import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredients } from 'src/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 @ViewChild('nameInput',{static: false}) nameInputRef:ElementRef;
 @ViewChild('amountInput',{static: false}) amountInputRef:ElementRef;
 
 
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  addItem(){
    this.shoppingListService.addIngredient({name:this.nameInputRef.nativeElement.value,amount:this.amountInputRef.nativeElement.value});
  }
}

import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})

export class HeaderComponent{
    collapsed = true;

    @Output("emitRecipes") recipesEmitted = new EventEmitter<{recipes: boolean, shoppingList: boolean}>();
    @Output("emitShoppingList") shoppingListEmitted = new EventEmitter<{recipes: boolean, shoppingList: boolean}>();

    displayRecipes(){
        this.recipesEmitted.emit({recipes: true, shoppingList: false});
    }


    displayShoppingList(){
        this.shoppingListEmitted.emit({recipes: false, shoppingList: true});
    }
}
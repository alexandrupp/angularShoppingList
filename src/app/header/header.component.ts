import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})

export class HeaderComponent{
    collapsed = true;

    @Output("emitComponent") componentEmitted = new EventEmitter<{recipes: boolean, shoppingList: boolean}>();

    handleNavigation(component: string){
        if(component === "Recipes")
            this.componentEmitted.emit({recipes: true, shoppingList: false});
        else if (component === "Shopping List")
            this.componentEmitted.emit({recipes: false, shoppingList: true});
    }
}
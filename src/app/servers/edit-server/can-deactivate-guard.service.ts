import { ActivatedRouteSnapshot, CanDeactivate, RouterState, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactivate {
    canDeactevate: () => Observable<boolean> | Promise<boolean> | boolean
}

export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate>{

    canDeactivate(
        component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactevate();
    }
}
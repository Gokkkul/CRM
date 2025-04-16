import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { CookieService } from "ngx-cookie-service";


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate{

  constructor(private cookieService: CookieService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   if(this.cookieService.check('userData')){
    return true
   }
    return false;
  }

}
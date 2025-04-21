import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { SweetAlertService } from "../shared/services/sweet-alert.service";


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate{

  constructor(private cookieService: CookieService, private swal: SweetAlertService, private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   if(this.cookieService.check('userData')){
    return true
   }
   this.swal.showToast('Please Login', 'warning')
   this.router.navigate(['/login'])
    return false;
  }
}
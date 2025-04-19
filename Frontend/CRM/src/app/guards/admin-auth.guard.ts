import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { SweetAlertService } from "../shared/services/sweet-alert.service";
import { SharedService } from "../shared/services/shared.service";


@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate{
  role !: string;

  constructor(private cookieService: CookieService, private swal: SweetAlertService, private sharedService: SharedService){ 
    this.sharedService.userRole$.subscribe(
    role => {
      this.role = role
      // console.log(role)
    }
    
  )}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   if(this.role === 'admin'){
    return true
   }
   this.swal.showToast('Invalid Route', 'warning')
    return false;
  }
}
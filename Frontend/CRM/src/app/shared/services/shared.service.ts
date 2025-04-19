import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private cookieService: CookieService) {
    this.monitorUserId();
    this.monitorUserRole();
  }

  private userRole = new BehaviorSubject<string>('user');
  userRole$ = this.userRole.asObservable();

  private userId = new BehaviorSubject<number>(0);
  userId$ = this.userId.asObservable();

  getIdFromUser() {
    const userData = this.cookieService.get('userData');
    // console.log("Shared service",userData);  
    if (!userData) {
      return 0;
    }

    return JSON.parse(userData);
  }

  monitorUserId() {
    interval(300).subscribe(() => {
      const user = this.getIdFromUser();
      const userId = user.id;

      this.userId.next(userId);
    });
  }
  monitorUserRole() {
    interval(300).subscribe(() => {
      const user = this.getIdFromUser();
      const userRole = user.role;

      this.userRole.next(userRole);
      
    });
  }
}

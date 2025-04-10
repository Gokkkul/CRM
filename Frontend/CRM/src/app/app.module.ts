import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { UserModule } from './user/user.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SalesOpportunityModule } from './sales-opportunity/sales-opportunity.module';
import { ToastrModule } from 'ngx-toastr';
import {CookieService} from 'ngx-cookie-service';
import { DashboardModule } from './dashboard/dashboard.module';
import { GlobalErrorHandler } from './global/errorHandler/errorHandler';
import { ApiRouteInterceptor } from './global/interceptor/api-route.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // DashboardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ButtonModule,
    UserModule,
    SalesOpportunityModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center', // Position of the toast
      progressAnimation: 'increasing', // Options: 'decreasing' or 'increasing'
      easing: 'ease-in-out', // Control animation easing
      progressBar: true, // Display progress bar
      timeOut: 3000, // Duration the toast is visible (in milliseconds)
      extendedTimeOut: 1000, // Extra time after mouse hover
      enableHtml: true, // Enable HTML in toast messages
    }),
  ],
  providers: [
    CookieService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler }, // Error Handler
    { provide: HTTP_INTERCEPTORS, useClass: ApiRouteInterceptor, multi: true }, // http interceptor
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false || 'none',
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

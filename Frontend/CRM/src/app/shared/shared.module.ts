import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectModule } from 'primeng/select';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { SweetAlertComponent } from './components/sweet-alert/sweet-alert.component';
import { ChartModule } from 'primeng/chart';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { Skeleton, SkeletonModule } from 'primeng/skeleton';


const ngPrimeModule = [
  TableModule,
  ButtonModule,
  InputTextModule,
  DropdownModule,
  MultiSelectModule,
  SliderModule,
  TagModule,
  ProgressBarModule,
  CalendarModule,
  CheckboxModule,
  SelectModule,
  IconField,
  InputIcon,
  DialogModule,
  MessageModule,
  ChartModule,
  ProgressSpinnerModule
];


@NgModule({
  declarations: [
    ButtonComponent,
    NavbarComponent,
    SidenavbarComponent,
    SweetAlertComponent,
    SearchBarComponent,
    ProgressSpinnerComponent,
    GenericTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    ngPrimeModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SkeletonModule
  ],
  exports: [
    ButtonComponent,
    NavbarComponent,
    SidenavbarComponent,
    SearchBarComponent,
    ngPrimeModule,
    NgxPaginationModule,
    ProgressSpinnerComponent,
    Skeleton
  ]
})
export class SharedModule { }

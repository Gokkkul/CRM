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
  MessageModule
];


@NgModule({
  declarations: [
    ButtonComponent,
    NavbarComponent,
    SidenavbarComponent,
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
  ],
  exports: [
    ButtonComponent,
    NavbarComponent,
    SidenavbarComponent,
    ngPrimeModule,
  ]
})
export class SharedModule { }

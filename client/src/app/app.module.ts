import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DisplayCategoryComponent } from './Component/display-category/display-category.component';
import { WelcomePageComponent } from './Component/welcome-page/welcome-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { DatePipe } from '@angular/common';
import { NetworkInterceptor } from './Component/network.interceptor';
//import { DisplayInputDateComponent } from './Component/display-category/display-inputdate.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayCategoryComponent,
  
    WelcomePageComponent,
    NavBarComponent
    
  ],
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    NgbModule,
    FormsModule,

    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule, 

    RouterModule.forRoot([
      { path: '', component: DisplayCategoryComponent },
      { path: 'displaycategory', component: DisplayCategoryComponent }
    
    ]),
    BrowserAnimationsModule
 
  ],
  providers: [DatePipe,{
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

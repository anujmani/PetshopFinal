import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/sign-uppage/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ShoppageComponent } from './pages/shoppage/shoppage.component';
import { CartComponent } from './pages/cart/cart.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { DetailsComponent } from './pages/details/details.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BuypageComponent } from './pages/buypage/buypage.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    HomePageComponent,
    ShoppageComponent,
    CartComponent,
    DetailsComponent,
    BuypageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

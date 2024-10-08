import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/sign-uppage/signup/signup.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShoppageComponent } from './pages/shoppage/shoppage.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginpageComponent } from './pages/loginPage/loginpage/loginpage.component';

const routes: Routes = [
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:"full"
  },
  {
    path:'',
    component: HomePageComponent,
    pathMatch:"full"
  },
  {
    path:'login',
    component: LoginpageComponent,
    pathMatch:"full"
  },
  {
    path:'shop',
    component: ShoppageComponent,
    pathMatch:"full",
  },
  {
    path:'cart',
    component: CartComponent,
    pathMatch:'full'
  },
  {
    path:'details/:petId',
    component: DetailsComponent,
 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

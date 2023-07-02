import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './navbar/login/login.component';
import { RegisterComponent } from './navbar/register/register.component';
import { ContactUsComponent } from './navbar/contact-us/contact-us.component';
import { AboutUsComponent } from './navbar/about-us/about-us.component';
import { SellorbuyComponent } from './navbar/sellorbuy/sellorbuy.component';
import { SellerHomeComponent } from './navbar/seller-home/seller-home.component';
import { BuyerHomeComponent } from './navbar/buyer-home/buyer-home.component';

const routes: Routes = [
  {path:'',redirectTo:'navbar',pathMatch:'full'},
  {path:'navbar',component:NavbarComponent,
children:[
  {path:'',redirectTo:'main-page',pathMatch:'full'},
  {path:'main-page',component:MainPageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'sellorbuy',component:SellorbuyComponent},
  {path:'seller-home',component:SellerHomeComponent},
  {path:'buyer-home',component:BuyerHomeComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

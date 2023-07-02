import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './navbar/login/login.component';
import { RegisterComponent } from './navbar/register/register.component';
import { ContactUsComponent } from './navbar/contact-us/contact-us.component';
import { AboutUsComponent } from './navbar/about-us/about-us.component';
import { SellorbuyComponent } from './navbar/sellorbuy/sellorbuy.component';
import { SellerHomeComponent } from './navbar/seller-home/seller-home.component';
import { BuyerHomeComponent } from './navbar/buyer-home/buyer-home.component';
import { PaymentComponent } from './navbar/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    AboutUsComponent,
    SellorbuyComponent,
    SellerHomeComponent,
    BuyerHomeComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

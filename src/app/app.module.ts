import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http'

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
import { WeightPipePipe } from './Pipes/weight-pipe.pipe';  

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
    PaymentComponent,
    WeightPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RiceServiceService } from 'src/app/Service/rice-service.service';
@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.component.html',
  styleUrls: ['./buyer-home.component.css'],
})
export class BuyerHomeComponent implements OnInit, OnDestroy {
  RiceSub = new Subscription();
  constructor(private RiceService: RiceServiceService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    this.RiceSub.unsubscribe();
  }
  todaysPriceOfRice: any;
  requestedQuantity: number = 0;
  Product: Product = {
    RICETYPE: '',
    QUANTITY: 0,
    AMOUNT: 0,
  };
  products: Product[] = [
    {
      RICETYPE: 'Brown Rice',
      QUANTITY: 20,
      AMOUNT: 120,
    },
    {
      RICETYPE: 'White Rice',
      QUANTITY: 25,
      AMOUNT: 50,
    },
  ];
  addToCart(Product: Product) {
    this.Product = Product;
    this.getTodaysAmount(this.Product.RICETYPE);
  }
  Buy(Form: NgForm) {
    console.log(Form.form.value);
  }
  getTodaysAmount(riceType: String) {
    this.RiceSub = this.RiceService.getTodayAmount(riceType).subscribe({
      next: (amount: { ricePrice: number }) => {
        this.todaysPriceOfRice = amount.ricePrice;
      },
      error: (err) => {
        this.todaysPriceOfRice = 'Cannot get the details';
      },
    });
    console.log(riceType);
  }
}

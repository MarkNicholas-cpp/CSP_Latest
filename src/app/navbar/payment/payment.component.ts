import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  name: string='';
  paymentMethod: string='';
  upiId: string='';
  cardNumber: string='';
  expiryDate: string='';
  cvv: string='';

  toggleFields() {
    // Reset field values when payment method changes
    this.upiId = '';
    this.cardNumber = '';
    this.expiryDate = '';
    this.cvv = '';
  }

  submitForm() {
    // Submit form logic goes here
    console.log('Form submitted!');
  }
}

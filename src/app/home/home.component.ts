import { Component, OnInit } from '@angular/core';


interface Country {
  value: string;
  viewValue: string;
}
interface Devise {
  value: string;
  viewValue: string;
  icon: string;
}

interface PaymentMode {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  countries: Country[] = [
    {value: 'France', viewValue: 'France'},
    {value: 'Usa', viewValue: 'USA'}
   
  ];

  devises : Devise[] = [
    {value: 'EUR', viewValue: 'Euros', icon : 'mdi-currency-eur'},
    {value: 'USD', viewValue: 'USD', icon: 'mdi-currency-usd'},
  
   
  ];
  favoriteDevise: Devise = {value: 'EUR', viewValue: 'Euros', icon : 'mdi-currency-eur'};
  contributions: string[] = ['Mensuellement', 'Ponctuellement'];
  favoriteContribution = 'Ponctuellement';

  favoritePaymentMode = "cc";
  paymentModes: PaymentMode[] =   [ {value: 'cc', viewValue: 'Credit card'}, {value: 'payPal', viewValue: 'PayPal'}];
  constructor() { }

  ngOnInit(): void {
  }

}

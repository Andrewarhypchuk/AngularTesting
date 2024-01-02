import { Component } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-converter',
  styleUrls: ['./app-converter.component.css'],
  template: `
    <div class="d-flex">
      <div>
        <input (keyup)="convertCurrency()" [(ngModel)]="amount" type="number" />
        <select (change)="updateBaseCurrency()"   [(ngModel)]="baseCurrency">
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div>
        <input (keyup)="updateFirstInput()" [(ngModel)]="convertedAmount" />
        <select (change)="updateTargetCurrency()" [(ngModel)]="targetCurrency">
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    </div>
  `,
})
export class AppConverterComponent {
  amount: number = 1;
  baseCurrency: string = 'UAH';
  targetCurrency: string = 'UAH';
  convertedAmount: number = 1;

  constructor(private currencyService: CurrencyService) {}

  convertCurrency() {
    this.currencyService
      .getExchangeRates(this.baseCurrency, this.targetCurrency)
      .subscribe((data: any) => {
        const rate = data.conversion_rates[this.targetCurrency];
        this.convertedAmount = Number((this.amount * rate).toFixed(2));
      });
  }
  updateFirstInput() {
    this.currencyService
      .getExchangeRates(this.targetCurrency, this.baseCurrency)
      .subscribe((data: any) => {
        const rate = data.conversion_rates[this.baseCurrency];
        this.amount = Number((this.convertedAmount * rate).toFixed(2));
      });
  }
  updateBaseCurrency() {
    this.convertCurrency()
  }
  updateTargetCurrency() {
    this.updateFirstInput();
  }
}

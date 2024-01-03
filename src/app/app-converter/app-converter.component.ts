import { Component, OnDestroy } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { Subscription } from 'rxjs';
import { ExchangeRates } from 'src/Interfaces/interfaces';

@Component({
  selector: 'app-converter',
  styleUrls: ['./app-converter.component.css'],
  templateUrl: './app-converter.component.html',
})
export class AppConverterComponent implements OnDestroy {
  amount: number = 1;
  baseCurrency: string = 'UAH';
  targetCurrency: string = 'UAH';
  convertedAmount: number = 1;

  private subscription!: Subscription;

  constructor(private currencyService: CurrencyService) {}

  convertCurrency() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.currencyService
      .getExchangeRates(this.baseCurrency, this.targetCurrency)
      .subscribe((data: ExchangeRates) => {
        const rate = data.conversion_rates[this.targetCurrency];
        this.convertedAmount = Number((this.amount * rate).toFixed(2));
      });
  }

  updateFirstInput() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.currencyService
      .getExchangeRates(this.targetCurrency, this.baseCurrency)
      .subscribe((data: ExchangeRates) => {
        const rate = data.conversion_rates[this.baseCurrency];
        this.amount = Number((this.convertedAmount * rate).toFixed(2));
      });
  }

  updateBaseCurrency() {
    this.convertCurrency();
  }

  updateTargetCurrency() {
    this.updateFirstInput();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}



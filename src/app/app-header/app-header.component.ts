import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-header',
  styleUrls: ['./app-header.component.css'],
  template: `
    <div class="container">
      <h2>Exchange Rates</h2>
      <div class="d-flex">
        <p>USD to UAH: {{ USDRate }}</p>
        <p>EUR to UAH: {{ EURORate }}</p>
      </div>
    </div>
  `,
})
export class AppHeaderComponent implements OnInit {
  USDRate: number = 0;
  EURORate: number = 0;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService.getUAHtoUSD().subscribe((rates) => {
      this.USDRate = Number((1 / rates.conversion_rates.USD).toFixed(2));
      this.EURORate = Number((1 / rates.conversion_rates.EUR).toFixed(2));
    });
  }
}

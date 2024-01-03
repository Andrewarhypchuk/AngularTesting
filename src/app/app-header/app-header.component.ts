import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  styleUrls: ['./app-header.component.css'],
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  USDRate: number = 0;
  EURORate: number = 0;
  private subscription: Subscription;

  constructor(private currencyService: CurrencyService) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.subscription.add(
      this.currencyService.getUAHtoUSD().subscribe((rates) => {
        this.USDRate = Number((1 / rates.conversion_rates['USD']).toFixed(2));
        this.EURORate = Number((1 / rates.conversion_rates['EUR']).toFixed(2));
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


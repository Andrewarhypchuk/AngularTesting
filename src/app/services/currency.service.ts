import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/f63c0f8a9900cc3ac093400d/latest/';

  constructor(private http: HttpClient) {}

  getExchangeRates(baseCurrency: string, targetCurrency: string): Observable<any> {
    const url = `${this.apiUrl}${baseCurrency}`;
    return this.http.get(url);
  }
  getUAHtoUSD(): Observable<any> {
    return this.getExchangeRates('UAH', 'USD');
  }
  getUAHtoEUR(): Observable<any> {
    return this.getExchangeRates('UAH', 'EUR');
  }
}

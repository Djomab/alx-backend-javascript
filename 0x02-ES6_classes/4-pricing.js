/* eslint-disable import/extensions */
import Currency from './3-currency.js';

export default class Pricing {
  /**
   * Attributes:
   * amount: number
   * currency: Currency
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // GETTERS
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // SETTERS
  set amount(amount) {
    if (typeof amount === 'number') this._amount = amount;
  }

  set currency(currency) {
    if (currency instanceof Currency) this._currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
